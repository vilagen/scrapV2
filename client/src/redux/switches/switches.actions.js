import SwitchActionTypes from "./switches.types";

// we don't need a payload, because the reducer is set to change
// the state from true to false automatically
export const toggleDarkModeSwitch = () => ({
  type: SwitchActionTypes.DARK_MODE,
});
