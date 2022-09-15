import * as c from './../actions/ActionTypes';

const reducer = (state = false, action) => {
  switch(action.type) {
    case c.TOGGLE_EDIT_FORM:
      return !state;
    default:
      return state;
  }
}

export default reducer;