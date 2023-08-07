export const INC = "INC";
export const DEC = "DEC";
export const CLR = "CLR";
export const increment = () => {
  return { type: INC };
};
export const decrement = () => ({ type: DEC });
export const clear = () => ({ type: CLR });

const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return { count: state.count + 1 };
    case DEC:
      if (state.count !== 0) {
        return { count: state.count - 1 };
      }
      return state;

    case CLR:
      return { count: 0 };

    default:
      return state;
  }
};
