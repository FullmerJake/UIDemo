import * as c from "../../actions/ActionTypes";

const firstMenuVis = (state = false, action) => {
  switch (action.type) {
    case c.FIRST_MENU_VIS:
      return !state;
    default:
      return state;
  }
};

export default firstMenuVis;
