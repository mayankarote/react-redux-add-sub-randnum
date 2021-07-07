export const addition = (nr) => {
  return {
    type: "ADD",
    payload: nr,
  };
};
export const substraction = () => {
  return {
    type: "SUB",
  };
};

export const square = (nr) => {
  return {
    type: "SQUARE",
    payload: nr,
  };
};
