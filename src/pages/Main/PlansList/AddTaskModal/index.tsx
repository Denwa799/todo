import { ChangeEvent, FC, useState } from 'react';
import {
  Alert,
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Snackbar,
  TextField,
} from '@mui/material';
import { AppVerticalMargins } from 'layouts/AppVerticalMargins';
import { AppModal } from 'UI/AppModal';
import { THEME } from 'constants/theme';
import { useCreateTaskMutation } from 'hooks/PlansQuery/muitations/useCreateTaskMutation';
import { IAddTaskModal } from './types';

export const AddTaskModal: FC<IAddTaskModal> = ({
  planId,
  isOpen,
  planTasks,
  setIsOpen,
  setIsRefetchPlans,
}) => {
  const [nameValue, setNameValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const [colorValue, setColorValue] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const { mutateAsync } = useCreateTaskMutation();

  const nameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
  };

  const textHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTextValue(event.target.value);
  };

  const colorHandler = (event: SelectChangeEvent) => {
    setColorValue(event.target.value as string);
  };

  const onAlertClose = () => {
    setIsError(false);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const onCreate = async () => {
    if (nameValue.length < 3) {
      setErrorMessage('Слишком короткое название');
      return setIsError(true);
    }

    if (colorValue.length < 3) {
      setErrorMessage('Цвет не выбран');
      return setIsError(true);
    }

    const task = {
      id: Math.floor(Math.random() * 999999999),
      name: nameValue,
      text: textValue,
      isDone: false,
      color: colorValue,
    };

    const newTasks = [...planTasks];
    newTasks.push(task);

    const data = {
      id: planId,
      tasks: newTasks,
    };

    await mutateAsync(data);
    setIsOpen(false);
    return setIsRefetchPlans(true);
  };

  return (
    <>
      {isError && (
        <Snackbar open={isError} autoHideDuration={6000} onClose={onAlertClose}>
          <Alert severity="error" onClick={onAlertClose}>
            {errorMessage}
          </Alert>
        </Snackbar>
      )}
      <AppModal open={isOpen} onClose={onClose}>
        <FormControl fullWidth>
          <AppVerticalMargins margin={10}>
            <TextField
              value={nameValue}
              label="Name"
              required
              fullWidth
              size="small"
              onChange={nameHandler}
            />
          </AppVerticalMargins>
          <AppVerticalMargins margin={10}>
            <TextField
              value={textValue}
              label="Text"
              required
              fullWidth
              size="small"
              onChange={textHandler}
            />
          </AppVerticalMargins>
          <AppVerticalMargins margin={10}>
            <Select
              value={colorValue}
              label="Color"
              displayEmpty
              fullWidth
              onChange={colorHandler}
            >
              <MenuItem disabled value="">
                <em>Colors</em>
              </MenuItem>
              <MenuItem value={THEME.redColor1}>Red</MenuItem>
              <MenuItem value={THEME.blueColor1}>Blue</MenuItem>
              <MenuItem value={THEME.yellowColor1}>Yellow</MenuItem>
              <MenuItem value={THEME.greenColor1}>Green</MenuItem>
            </Select>
          </AppVerticalMargins>
          <Button size="large" onClick={onCreate}>
            Create
          </Button>
        </FormControl>
      </AppModal>
    </>
  );
};
