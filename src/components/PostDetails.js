import React from "react";
import PropTypes from "prop-types";
// import Card from 'bootstrap';
function PostDetails(props){

  const { post, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Post Details</h1>
      <h3>Title: {post.title}</h3>
      <h3>Author: {post.author}</h3>
      <h3>{post.body}</h3>
      <p><em>UpVotes: {parseInt(post.upVotes)} | DownVotes: {parseInt(post.downVotes)}</em></p>
      <p>{post.formattedWaitTime}</p>
      <hr/>
      <button onClick={() => props.onClickingUpVote(post.id)}>UpVote</button>
      <button onClick={() => props.onClickingDownVote(post.id)}> DownVote </button>
<<<<<<< HEAD
=======
      <button onClick={ props.onClickingEdit }>Edit Post</button> 
>>>>>>> fee05e1d0a278d776b979e13c025fa8c9cf681f5
      <button onClick={() => onClickingDelete(post.id) }>Delete Post</button>
    </React.Fragment>
  )
}

PostDetails.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingUpVote: PropTypes.func,
<<<<<<< HEAD
  onClickingDownVote: PropTypes.func
=======
  onClickingDownVote: PropTypes.func,
  onClickingEdit: PropTypes.func,
>>>>>>> fee05e1d0a278d776b979e13c025fa8c9cf681f5
};

export default PostDetails;