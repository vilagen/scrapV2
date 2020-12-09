import SwitchActionTypes from "./switches.types";

const INITIAL_STATE = {
  darkmode: false,
};

const switchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SwitchActionTypes.DARK_MODE:
      return {
        ...state,
        darkmode: !state.darkmode,
      };
    default:
      return state;
  }
};

export default switchReducer;
