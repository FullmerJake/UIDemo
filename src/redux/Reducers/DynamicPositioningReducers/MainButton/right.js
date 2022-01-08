import * as c from "../../../actions/ActionTypes";

const right = (state = false, action) => {
  switch (action.type) {
    case c.RIGHT:
      return !state;
    default:
      return state;
  }
};

export default right;
