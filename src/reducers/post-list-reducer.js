import * as c from './../actions/ActionTypes';

const reducer = (state = {}, action) => {
  const { title, author, body, id, upVotes, downVotes, formattedWaitTime, timeOpen } = action;
  switch (action.type) {
  case c.ADD_POST:
    return Object.assign({}, state, {
      [id]: {
        title: title,
        author: author,
        body: body,
        upVotes: 0,
        downVotes: 0,
        id: id,
        timeOpen: timeOpen,
        formattedWaitTime: formattedWaitTime
      }
    });
  case c.DELETE_POST:
    const newState = { ...state };
    delete newState[id];
    return newState;
  case c.UPDATE_TIME:
    const newPost = Object.assign({}, state[id], {formattedWaitTime});
    const updatedState = Object.assign({}, state, {
      [id]: newPost
    });
    return updatedState;
  default:
    return state;
  }
};

export default reducer;