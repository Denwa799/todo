const reg = /^#([0-9a-f]{3}){1,2}$/i;

export const checkStringHexColor = (string: string) => {
  return reg.test(string);
};
