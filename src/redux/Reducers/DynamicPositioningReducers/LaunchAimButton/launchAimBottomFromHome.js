import * as c from "../../../actions/ActionTypes";

const launchAimBottomFromHome = (state = false, action) => {
  switch (action.type) {
    case c.LAUNCH_AIM_BOTTOM_FROM_HOME:
      return !state;
    default:
      return state;
  }
};

export default launchAimBottomFromHome;
