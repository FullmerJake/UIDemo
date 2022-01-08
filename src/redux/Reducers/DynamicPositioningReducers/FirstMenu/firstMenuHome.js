import * as c from "../../../actions/ActionTypes";

const firstMenuHome = (state = false, action) => {
  switch (action.type) {
    case c.FIRST_MENU_HOME:
      return !state;
    default:
      return state;
  }
};

export default firstMenuHome;
