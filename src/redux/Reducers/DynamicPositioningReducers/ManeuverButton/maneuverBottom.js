import * as c from "../../../actions/ActionTypes";

const maneuverBottom = (state = false, action) => {
  switch (action.type) {
    case c.MANEUVER_BOTTOM:
      return !state;
    default:
      return state;
  }
};

export default maneuverBottom;
