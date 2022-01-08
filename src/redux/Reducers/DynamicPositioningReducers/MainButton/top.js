import * as c from "../../../actions/ActionTypes";

const top = (state = false, action) => {
  switch (action.type) {
    case c.TOP:
      return !state;
    default:
      return state;
  }
};

export default top;
