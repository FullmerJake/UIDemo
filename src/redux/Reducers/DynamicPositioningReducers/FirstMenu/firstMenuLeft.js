import * as c from "../../../actions/ActionTypes";

const firstMenuLeft = (state = false, action) => {
  switch (action.type) {
    case c.FIRST_MENU_LEFT:
      return !state;
    default:
      return state;
  }
};

export default firstMenuLeft;
