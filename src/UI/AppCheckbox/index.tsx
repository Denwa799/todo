import { Checkbox, CheckboxProps, styled } from '@mui/material';
import { THEME } from 'constants/theme';
import styles from './styles.module.css';

const Icon = styled('span')({
  borderRadius: 6,
  width: 23,
  height: 23,
  backgroundColor: THEME.primaryColor1,
});

const CheckedIcon = styled(Icon)({
  backgroundColor: THEME.primaryColor1,
  '&:before': {
    display: 'block',
    width: 18,
    height: 18,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill=''/%3E%3C/svg%3E\")",
    content: '""',
  },
});

export const AppCheckbox = (props: CheckboxProps) => {
  return (
    <Checkbox
      className={styles.AppCheckbox}
      {...props}
      icon={<Icon />}
      checkedIcon={<CheckedIcon />}
      disableRipple
    />
  );
};
