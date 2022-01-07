import * as c from "../../actions/ActionTypes";

const mainButtonVis = (state = false, action) => {
  switch (action.type) {
    case c.MAIN_BUTTON_VIS:
      return !state;
    default:
      return state;
  }
};

export default mainButtonVis;
