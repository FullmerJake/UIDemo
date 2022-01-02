import * as c from "../../../actions/ActionTypes";

const bottomFromHome = (state = false, action) => {
  switch (action.type) {
    case c.BOTTOM_FROM_HOME:
      return !state;
    default:
      return state;
  }
};

export default bottomFromHome;
