import postListReducer from '../../reducers/post-list-reducer';

describe('postListReducer', () => {

  let action;

  const currentState = {
    1: {
      title: 'test1',
      author: 'daniel',
      body: 'Redux action is not working correctly.',
      id: 1 
    }, 2: {
      title: 'test2',
      author: 'joe',
      body: 'Reducer has side effects.',
      id: 2 
    }
  }

  const postData = {
    title: 'test1',
    author: 'daniel',
    body: 'Redux action is not working correctly.',
    id: 1
  };

  test('Should return default state if no action type is recognized', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new post data to mainPostList', () => {
    const { title, author, body, id } = postData;
    action = {
      type: 'ADD_POST',
      title: title,
      author: author,
      body: body,
      upVotes: 0,
      downVotes: 0,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
      [id] : {
        title: title,
        author: author,
        body: body,
        upVotes: 0,
        downVotes: 0,
        id: id
      }
    });
  });

  test('Should successfully delete a post', () => {
    action = {
      type: 'DELETE_POST',
      id: 1
    };
    expect(postListReducer(currentState, action)).toEqual({
      2: {
        title: 'test2',
        author: 'joe',
        body: 'Reducer has side effects.',
        id: 2 
      }
    });
  });

});

