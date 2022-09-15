import formVisibleReducer from './form-visible-reducer';
import postListReducer from './post-list-reducer';
import editingReducer from './editing-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainPostList: postListReducer,
  editing: editingReducer
});

export default rootReducer;