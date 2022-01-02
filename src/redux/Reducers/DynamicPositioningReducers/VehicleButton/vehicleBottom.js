import * as c from "../../../actions/ActionTypes";

const vehicleBottom = (state = false, action) => {
  switch (action.type) {
    case c.VEHICLE_BOTTOM:
      return !state;
    default:
      return state;
  }
};

export default vehicleBottom;
