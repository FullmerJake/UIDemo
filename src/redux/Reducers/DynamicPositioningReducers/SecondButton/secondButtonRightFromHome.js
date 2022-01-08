import * as c from "../../../actions/ActionTypes";

const secondButtonRightFromHome = (state = false, action) => {
  switch (action.type) {
    case c.SECOND_BUTTON_RIGHT_FROM_HOME:
      return !state;
    default:
      return state;
  }
};

export default secondButtonRightFromHome;
