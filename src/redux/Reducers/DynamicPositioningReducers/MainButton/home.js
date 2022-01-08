import * as c from "../../../actions/ActionTypes";

const home = (state = false, action) => {
  switch (action.type) {
    case c.HOME:
      return !state;
    default:
      return state;
  }
};

export default home;
