// Очищает временную метку от часов и часового пояса
export const dateClearTime = (date: number) => {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);

  const userTimezoneOffset = newDate.getTimezoneOffset() * 60000;

  return newDate.getTime() - userTimezoneOffset;
};

export const dateClearHours = (date: Date) => {
  return date.setHours(0, 0, 0, 0);
};
