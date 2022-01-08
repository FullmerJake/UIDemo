import * as c from "../../../actions/ActionTypes";

const firstMenuTopFromHome = (state = false, action) => {
  switch (action.type) {
    case c.FIRST_MENU_TOP_FROM_HOME:
      return !state;
    default:
      return state;
  }
};

export default firstMenuTopFromHome;
