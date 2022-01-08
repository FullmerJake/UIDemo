import * as c from "../../../actions/ActionTypes";

const bottomFromRight = (state = false, action) => {
  switch (action.type) {
    case c.BOTTOM_FROM_RIGHT:
      return !state;
    default:
      return state;
  }
};

export default bottomFromRight;
