import * as c from "../../../actions/ActionTypes";

const topFromHome = (state = false, action) => {
  switch (action.type) {
    case c.TOP_FROM_HOME:
      return !state;
    default:
      return state;
  }
};

export default topFromHome;
