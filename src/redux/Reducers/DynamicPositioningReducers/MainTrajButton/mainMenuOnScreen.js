import * as c from "../../../actions/ActionTypes";

const mainMenuOnScreen = (state = false, action) => {
  switch (action.type) {
    case c.MAINMENU_ON_SCREEN:
      return !state;
    default:
      return state;
  }
};

export default mainMenuOnScreen;
