const resultReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return state + action.payload;

    case "SUB":
      return state - 1;

    case "SQUARE":
      return state * action.payload;

    default:
      return state;
  }
};

export default resultReducer;
