import * as c from "../actions/ActionTypes";

const clickDontClick = (state = false, action) => {
  switch (action.type) {
    case c.CLICK_DONT_CLICK:
      return !state;
    default:
      return state;
  }
};

export default clickDontClick;
