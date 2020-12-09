import { combineReducers } from "redux";

//examples
// import userReducer from './user/user.reducer';
// import cartReducer from './cart/cart.reducer';

import switchReducer from "./switches/switches.reducer";

export default combineReducers({
  // //examples
  // user: userReducer,
  // cart: cartReducer
  switch: switchReducer,
});
