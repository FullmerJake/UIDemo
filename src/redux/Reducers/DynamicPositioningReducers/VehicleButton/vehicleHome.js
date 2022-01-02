import * as c from "../../../actions/ActionTypes";

const vehicleHome = (state = false, action) => {
  switch (action.type) {
    case c.VEHICLE_HOME:
      return !state;
    default:
      return state;
  }
};

export default vehicleHome;
