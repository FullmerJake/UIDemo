import * as c from "../../../actions/ActionTypes";

const secondButtonHome = (state = false, action) => {
  switch (action.type) {
    case c.SECOND_BUTTON_HOME:
      return !state;
    default:
      return state;
  }
};

export default secondButtonHome;
