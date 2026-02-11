export const initialState = {
  input: "",
  ans: 0,
};

export const methods = {
  addInput: "ADD_INPUT",
  calculate: "CALCULATE",
  clear: "CLEAR",
};

const reducer = (state, action) => {
  switch (action.type) {
    case methods.addInput:
      return {
        ...state,
        input: state.input + action.payload,
      };

    case methods.calculate:
      return {
        ...state,
        ans: eval(state.input),
      };

    case methods.clear:
      return {
        input: "",
        ans: 0,
      };

    default:
      return state;
  }
};

export default reducer;