import UserActionTypes from "./user.types";
import userInfo from "../../components/Profile/json/user.json";

const INITIAL_STATE = {
  user: userInfo.users[0],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.USER:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default userReducer;
