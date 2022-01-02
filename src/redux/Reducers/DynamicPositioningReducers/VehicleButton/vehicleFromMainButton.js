import * as c from "../../../actions/ActionTypes";

const vehicleFromMainButton = (state = false, action) => {
  switch (action.type) {
    case c.VEHICLE_FROM_MAIN_BUTTON:
      return !state;
    default:
      return state;
  }
};

export default vehicleFromMainButton;
