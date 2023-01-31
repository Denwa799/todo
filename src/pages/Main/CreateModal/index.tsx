import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Alert, Button, FormControl, Snackbar, TextField } from '@mui/material';
import { AppModal } from 'UI/AppModal';
import { AppDateInput } from 'UI/AppDateInput';
import { AppVerticalMargins } from 'layouts/AppVerticalMargins';
import { dateClearTime } from 'utils/date/dateClear';
import { useCreatePlanMutation } from 'hooks/PlansQuery/muitations/useCreatePlanMutation';
import { isAxiosError } from 'axios';
import { ICreateModal } from './types';

export const CreateModal: FC<ICreateModal> = ({ open, setIsOpen }) => {
  const [nameValue, setNameValue] = useState('');
  const [dateValue, setDateValue] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const { mutateAsync, isLoading, error } = useCreatePlanMutation();

  useEffect(() => {
    if (error && isAxiosError(error)) {
      setErrorMessage(error.message);
      setIsError(true);
    }
  }, [error]);

  const nameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
  };

  const dateHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setDateValue(event.target.value);
  };

  const onAlertClose = () => {
    setIsError(false);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const onCreate = async () => {
    const currentDate = dateClearTime(new Date().getTime());
    const dateInInput = dateClearTime(new Date(dateValue).getTime());

    if (nameValue.length < 3) {
      setErrorMessage('Слишком короткое название');
      return setIsError(true);
    }

    if (!dateValue) {
      setErrorMessage('Дата не введена');
      return setIsError(true);
    }

    if (dateInInput < currentDate) {
      setErrorMessage('Дата не может быть прошедшей');
      return setIsError(true);
    }

    const data = {
      id: Math.floor(Math.random() * 999999999),
      name: nameValue,
      date: dateInInput,
      tasks: [],
    };

    await mutateAsync(data);
    return setIsOpen(false);
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
      <AppModal open={open} onClose={onClose}>
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
            <AppDateInput value={dateValue} onChange={dateHandler} />
          </AppVerticalMargins>
          <Button size="large" disabled={isLoading} onClick={onCreate}>
            Create
          </Button>
        </FormControl>
      </AppModal>
    </>
  );
};
