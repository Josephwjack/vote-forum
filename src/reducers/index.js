import formVisibleReducer from './form-visible-reducer';
import postListReducer from './post-list-reducer';
import selectedPostReducer from './selected-post-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainPostList: postListReducer,
  selectedPost: selectedPostReducer
});

export default rootReducer;