import * as c from "../../../actions/ActionTypes";

const maneuverBottomFromHome = (state = false, action) => {
  switch (action.type) {
    case c.MANEUVER_BOTTOM_FROM_HOME:
      return !state;
    default:
      return state;
  }
};

export default maneuverBottomFromHome;
