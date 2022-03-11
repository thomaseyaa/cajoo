export const validatePhone = number => {
  return String(number)
    .toLowerCase()
    .match(/^(?=.{9,})/);
};

export default validatePhone;
