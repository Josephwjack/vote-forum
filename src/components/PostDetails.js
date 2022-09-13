import React from "react";
import PropTypes from "prop-types";

function PostDetails(props){

  const { post, onClickingDelete, } = props;
  return (
    <React.Fragment>
      <h1>Post Details</h1>
      <h3>Title: {post.title}</h3>
      <h3>Author: {post.author}</h3>
      <h3>{post.body}</h3>
      <hr/>
      <button onClick={() => onClickingDelete(post.id) }>Delete Post</button>
    </React.Fragment>
  )
}

PostDetails.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default PostDetails;