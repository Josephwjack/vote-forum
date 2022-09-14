import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditPost(props) {
  const { post } = props;

  function handleEditPostSubmission(event) {
    event.preventDefault();
    props.onEditPost({
      title: event.target.title.value, 
      author: event.target.author.value,
      body: event.target.body.value,
      upVotes: 0,
      downVotes: 0,
      id: post.id })
  }
  return (
    <React.Fragment>
      <div className="container">
        <ReusableForm
          postSubmissionHandler={handleEditPostSubmission}
          buttonText="Update Post" />
      </div>
    </React.Fragment>
  );
}

EditPost.propTypes = {
  post: PropTypes.object,
  onEditPost: PropTypes.func
};

export default EditPost;