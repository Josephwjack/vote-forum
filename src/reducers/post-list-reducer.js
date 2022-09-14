const reducer = (state = {}, action) => {
  const { title, author, body, id, upVotes, downVotes } = action;
  switch (action.type) {
  case 'ADD_POST':
    return Object.assign({}, state, {
      [id]: {
        title: title,
        author: author,
        body: body,
        upVotes: upVotes,
        downVotes: downVotes,
        id: id
      }
    });
  case 'DELETE_POST':
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};

export default reducer;