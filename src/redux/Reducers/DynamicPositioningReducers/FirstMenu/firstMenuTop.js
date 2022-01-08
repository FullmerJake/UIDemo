import * as c from "../../../actions/ActionTypes";

const firstMenuTop = (state = false, action) => {
  switch (action.type) {
    case c.FIRST_MENU_TOP:
      return !state;
    default:
      return state;
  }
};

export default firstMenuTop;
