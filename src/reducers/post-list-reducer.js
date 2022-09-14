import * as c from './../actions/ActionTypes';

const reducer = (state = {}, action) => {
  const { title, author, body, id, upVotes, downVotes } = action;
  switch (action.type) {
  case c.ADD_POST:
    return Object.assign({}, state, {
      [id]: {
        title: title,
        author: author,
        body: body,
        upVotes: 0,
        downVotes: 0,
        id: id
      }
    });
  case c.DELETE_POST:
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};

export default reducer;