import * as c from "../../../actions/ActionTypes";

const vehicleBottomFromHome = (state = false, action) => {
  switch (action.type) {
    case c.VEHICLE_BOTTOM_FROM_HOME:
      return !state;
    default:
      return state;
  }
};

export default vehicleBottomFromHome;
