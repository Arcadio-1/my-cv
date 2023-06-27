export const regexCheck = (reg: RegExp, value: string): Boolean => {
  const val = String(value);
  const regex = RegExp(reg);
  const isValid = regex.test(val);
  return isValid;
};
