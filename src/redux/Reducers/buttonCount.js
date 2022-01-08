import * as c from "../actions/ActionTypes";

const buttonCount = (state = false, action) => {
  switch (action.type) {
    case c.BUTTON_COUNT:
      return !state;
    default:
      return state;
  }
};

export default buttonCount;
