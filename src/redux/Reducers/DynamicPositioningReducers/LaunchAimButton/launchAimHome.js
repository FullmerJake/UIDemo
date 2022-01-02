import * as c from "../../../actions/ActionTypes";

const launchAimHome = (state = false, action) => {
  switch (action.type) {
    case c.LAUNCH_AIM_HOME:
      return !state;
    default:
      return state;
  }
};

export default launchAimHome;
