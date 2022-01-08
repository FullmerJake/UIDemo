import * as c from "../../../actions/ActionTypes";

const firstMenuLeftFromTop = (state = false, action) => {
  switch (action.type) {
    case c.FIRST_MENU_LEFT_FROM_TOP:
      return !state;
    default:
      return state;
  }
};

export default firstMenuLeftFromTop;
