import * as c from "../../../actions/ActionTypes";

const homeFromBottom = (state = false, action) => {
  switch (action.type) {
    case c.HOME_FROM_BOTTOM:
      return !state;
    default:
      return state;
  }
};

export default homeFromBottom;
