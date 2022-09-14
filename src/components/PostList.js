import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props){

  return (
    <React.Fragment> 
      <hr />    
        {Object.values(props.postList).map((post) =>
        <Post
        whenPostClicked={props.onPostSelection} 
        title={post.title}
        author={post.author}
        body={post.body}
        upVotes={post.upVotes}
        downVotes={post.downVotes}
        id={post.id}
        key={post.id}/>
        )}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func
};

export default PostList;