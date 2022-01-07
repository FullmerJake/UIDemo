import * as c from "../../actions/ActionTypes";

const secondMenuVis = (state = false, action) => {
  switch (action.type) {
    case c.SECOND_MENU_VIS:
      return !state;
    default:
      return state;
  }
};

export default secondMenuVis;
