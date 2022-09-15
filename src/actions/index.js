import * as c from './../actions/ActionTypes';

export const updateTime = (id, formattedWaitTime) => ({
  type: c.UPDATE_TIME,
  id: id,
  formattedWaitTime: formattedWaitTime
});

export const deletePost = id => ({
  type: c.DELETE_POST,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const toggleEditForm = () => ({
  type: c.TOGGLE_EDIT_FORM
});

export const addPost = (post) => {
  const { title, author, body, id, formattedWaitTime, timeOpen } = post;
  return {
    type: c.ADD_POST,
    title: title,
    author: author,
    body: body,
    id: id,
    formattedWaitTime,
    timeOpen: timeOpen
  }
}
