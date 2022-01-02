import * as c from "../../../actions/ActionTypes";

const maneuverHome = (state = false, action) => {
  switch (action.type) {
    case c.MANEUVER_HOME:
      return !state;
    default:
      return state;
  }
};

export default maneuverHome;
