import * as c from "../../actions/ActionTypes";

const secondButtonVis = (state = false, action) => {
  switch (action.type) {
    case c.SECOND_BUTTON_VIS:
      return !state;
    default:
      return state;
  }
};

export default secondButtonVis;
