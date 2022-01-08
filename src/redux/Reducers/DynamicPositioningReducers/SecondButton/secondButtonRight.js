import * as c from "../../../actions/ActionTypes";

const secondButtonRight = (state = false, action) => {
  switch (action.type) {
    case c.SECOND_BUTTON_RIGHT:
      return !state;
    default:
      return state;
  }
};

export default secondButtonRight;
