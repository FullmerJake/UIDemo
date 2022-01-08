import * as c from "../../../actions/ActionTypes";

const bottom = (state = false, action) => {
  switch (action.type) {
    case c.BOTTOM:
      return !state;
    default:
      return state;
  }
};

export default bottom;
