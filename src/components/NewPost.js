import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { formatDistanceToNow } from 'date-fns';

function NewPost(props){
  
  function handleNewPostSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      title: event.target.title.value,
      author: event.target.author.value,
      body: event.target.body.value,
      upVotes: 0,
      downVotes: 0,
      id: v4(),
      timeOpen: new Date(),
      formattedWaitTime: formatDistanceToNow(new Date(), {
        addSuffix: true
      })
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