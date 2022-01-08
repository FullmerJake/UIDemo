import * as c from "../../../actions/ActionTypes";

const rightFromTop = (state = false, action) => {
  switch (action.type) {
    case c.RIGHT_FROM_TOP:
      return !state;
    default:
      return state;
  }
};

export default rightFromTop;
