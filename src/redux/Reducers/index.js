import { combineReducers } from "redux";
// import { INIT_STATE } from "../actions/ActionTypes";

//Dynamic Positioning Redux
import home from "./DynamicPositioningReducers/MainTrajButton/home";
import vehicleHome from "./DynamicPositioningReducers/VehicleButton/vehicleHome";
import maneuverHome from "./DynamicPositioningReducers/ManeuverButton/maneuverHome";
import launchAimHome from "./DynamicPositioningReducers/LaunchAimButton/launchAimHome";
import bottom from "./DynamicPositioningReducers/MainTrajButton/bottom";
import vehicleBottom from "./DynamicPositioningReducers/VehicleButton/vehicleBottom";
import maneuverBottom from "./DynamicPositioningReducers/ManeuverButton/maneuverBottom";
import launchAimBottom from "./DynamicPositioningReducers/LaunchAimButton/launchAimBottom";
import mainMenuOnScreen from "./DynamicPositioningReducers/MainTrajButton/mainMenuOnScreen";
import homeFromBottom from "./DynamicPositioningReducers/MainTrajButton/homeFromBottom";
import maneuverHomeFromBottom from "./DynamicPositioningReducers/ManeuverButton/maneuverHomeFromBottom";
import launchAimHomeFromBottom from "./DynamicPositioningReducers/LaunchAimButton/launchAimHomeFromBottom";
import bottomFromHome from "./DynamicPositioningReducers/MainTrajButton/bottomFromHome";
import vehicleBottomFromHome from "./DynamicPositioningReducers/VehicleButton/vehicleBottomFromHome";
import maneuverBottomFromHome from "./DynamicPositioningReducers/ManeuverButton/maneuverBottomFromHome";
import launchAimBottomFromHome from "./DynamicPositioningReducers/LaunchAimButton/launchAimBottomFromHome";
import tempHomeToHome from "./DynamicPositioningReducers/MainTrajButton/tempHomeToHome";
import vehicleHomeFromBottom from "./DynamicPositioningReducers/VehicleButton/vehicleHomeFromBottom";
import launchAimFromVehicle from "./DynamicPositioningReducers/LaunchAimButton/launchAimFromVehicle";
import maneuverFromVehicle from "./DynamicPositioningReducers/ManeuverButton/maneuverFromVehicle";
import vehicleFromMainButton from "./DynamicPositioningReducers/VehicleButton/vehicleFromMainButton";

// Visibility Redux
import mainButtonVis from "./VisibilityReducers/mainButtonVis";
import secondButtonVis from "./VisibilityReducers/secondButtonVis";
import firstMenuVis from "./VisibilityReducers/firstMenuVis";
import secondMenuVis from "./VisibilityReducers/secondMenuVis";

const appReducer = combineReducers({
  // You can just have setVisibility by itself, this is simply changing the name.
  home,
  vehicleHome,
  maneuverHome,
  launchAimHome,
  bottom,
  vehicleBottom,
  maneuverBottom,
  launchAimBottom,
  mainMenuOnScreen,
  homeFromBottom,
  maneuverHomeFromBottom,
  launchAimHomeFromBottom,
  bottomFromHome,
  vehicleBottomFromHome,
  maneuverBottomFromHome,
  launchAimBottomFromHome,
  tempHomeToHome,
  vehicleHomeFromBottom,
  launchAimFromVehicle,
  maneuverFromVehicle,
  vehicleFromMainButton,
  mainButtonVis,
  secondButtonVis,
  firstMenuVis,
  secondMenuVis,
});

const rootReducer = (state, action) => {
  // Clear all data in redux store to initial.
  // if (action.type === INIT_STATE) state = undefined;

  return appReducer(state, action);
};

export default rootReducer;
