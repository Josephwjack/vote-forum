import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewPost(props){
  
  function handleNewPostSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      title: event.target.title.value,
      author: event.target.author.value,
      body: event.target.body.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        postSubmissionHandler={handleNewPostSubmission}
        buttonText='Post' />
    </React.Fragment>
  );
}

NewPost.propTypes = {
  onNewPostCreation: PropTypes.func,
};

export default NewPost;