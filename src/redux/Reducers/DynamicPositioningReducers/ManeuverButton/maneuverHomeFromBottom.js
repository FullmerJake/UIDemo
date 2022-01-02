import * as c from "../../../actions/ActionTypes";

const maneuverHomeFromBottom = (state = false, action) => {
  switch (action.type) {
    case c.MANEUVER_HOME_FROM_BOTTOM:
      return !state;
    default:
      return state;
  }
};

export default maneuverHomeFromBottom;
