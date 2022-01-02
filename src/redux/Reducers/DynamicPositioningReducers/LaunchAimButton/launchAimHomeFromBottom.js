import * as c from "../../../actions/ActionTypes";

const launchAimHomeFromBottom = (state = false, action) => {
  switch (action.type) {
    case c.LAUNCH_AIM_HOME_FROM_BOTTOM:
      return !state;
    default:
      return state;
  }
};

export default launchAimHomeFromBottom;
