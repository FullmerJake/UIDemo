import * as c from "../../../actions/ActionTypes";

const maneuverFromVehicle = (state = false, action) => {
  switch (action.type) {
    case c.MANEUVER_FROM_VEHICLE:
      return !state;
    default:
      return state;
  }
};

export default maneuverFromVehicle;
