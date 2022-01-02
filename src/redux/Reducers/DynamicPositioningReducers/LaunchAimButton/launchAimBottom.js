import * as c from "../../../actions/ActionTypes";

const launchAimBottom = (state = false, action) => {
  switch (action.type) {
    case c.LAUNCH_AIM_BOTTOM:
      return !state;
    default:
      return state;
  }
};

export default launchAimBottom;
