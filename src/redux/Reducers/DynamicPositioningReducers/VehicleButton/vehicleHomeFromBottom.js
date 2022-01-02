import * as c from "../../../actions/ActionTypes";

const vehicleHomeFromBottom = (state = false, action) => {
  switch (action.type) {
    case c.VEHICLE_HOME_FROM_BOTTOM:
      return !state;
    default:
      return state;
  }
};

export default vehicleHomeFromBottom;
