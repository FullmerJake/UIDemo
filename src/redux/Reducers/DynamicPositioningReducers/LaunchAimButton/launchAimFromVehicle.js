import * as c from "../../../actions/ActionTypes";

const launchAimFromVehicle = (state = false, action) => {
  switch (action.type) {
    case c.LAUNCH_AIM_FROM_VEHICLE:
      return !state;
    default:
      return state;
  }
};

export default launchAimFromVehicle;
