import * as c from "../../../actions/ActionTypes";

const tempHomeToHome = (state = false, action) => {
  switch (action.type) {
    case c.TEMP_HOME_TO_HOME:
      return !state;
    default:
      return state;
  }
};

export default tempHomeToHome;
