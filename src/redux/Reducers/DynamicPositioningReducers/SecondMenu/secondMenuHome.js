import * as c from "../../../actions/ActionTypes";

const secondMenuHome = (state = false, action) => {
  switch (action.type) {
    case c.SECOND_MENU_HOME:
      return !state;
    default:
      return state;
  }
};

export default secondMenuHome;
