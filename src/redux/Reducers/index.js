import { combineReducers } from "redux";
// import { INIT_STATE } from "../actions/ActionTypes";

//Dynamic Positioning Redux
import firstMenuHome from "./DynamicPositioningReducers/FirstMenu/firstMenuHome";
import firstMenuLeft from "./DynamicPositioningReducers/FirstMenu/firstMenuLeft";
import firstMenuLeftFromTop from "./DynamicPositioningReducers/FirstMenu/firstMenuLeftFromTop";
import firstMenuTop from "./DynamicPositioningReducers/FirstMenu/firstMenuTop";
import firstMenuTopFromHome from "./DynamicPositioningReducers/FirstMenu/firstMenuTopFromHome";
import bottom from "./DynamicPositioningReducers/MainButton/bottom";
import bottomFromRight from "./DynamicPositioningReducers/MainButton/bottomFromRight";
import home from "./DynamicPositioningReducers/MainButton/home";
import right from "./DynamicPositioningReducers/MainButton/right";
import rightFromTop from "./DynamicPositioningReducers/MainButton/rightFromTop";
import top from "./DynamicPositioningReducers/MainButton/top";
import topFromHome from "./DynamicPositioningReducers/MainButton/topFromHome";
import secondButtonHome from "./DynamicPositioningReducers/SecondButton/secondButtonHome";
import secondButtonRight from "./DynamicPositioningReducers/SecondButton/secondButtonRight";
import secondButtonRightFromHome from "./DynamicPositioningReducers/SecondButton/secondButtonRightFromHome";
import secondMenuHome from "./DynamicPositioningReducers/SecondMenu/secondMenuHome";
import homeFromBottom from "./DynamicPositioningReducers/MainButton/homeFromBottom";

// Visibility Redux
import mainButtonVis from "./VisibilityReducers/mainButtonVis";
import secondButtonVis from "./VisibilityReducers/secondButtonVis";
import firstMenuVis from "./VisibilityReducers/firstMenuVis";
import secondMenuVis from "./VisibilityReducers/secondMenuVis";

import clickDontClick from "./clickDontClick";
import buttonCount from "./buttonCount";

const appReducer = combineReducers({
  // You can just have setVisibility by itself, this is simply changing the name.
  firstMenuHome,
  firstMenuLeft,
  firstMenuLeftFromTop,
  firstMenuTop,
  firstMenuTopFromHome,
  bottom,
  bottomFromRight,
  home,
  right,
  rightFromTop,
  top,
  topFromHome,
  secondButtonHome,
  secondButtonRight,
  secondButtonRightFromHome,
  secondMenuHome,
  mainButtonVis,
  secondButtonVis,
  firstMenuVis,
  secondMenuVis,
  clickDontClick,
  homeFromBottom,
  buttonCount,
});

const rootReducer = (state, action) => {
  // Clear all data in redux store to initial.
  // if (action.type === INIT_STATE) state = undefined;

  return appReducer(state, action);
};

export default rootReducer;
