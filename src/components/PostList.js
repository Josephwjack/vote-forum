import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props){

  return (
    <React.Fragment>
      <div>
        {Object.values(props.postList).map((post) =>
        <Post
          title={post.title}
          author={post.author}
          body={post.body}
          upVotes={post.upVotes}
          downVotes={post.downVotes}
          id={post.id}
          key={post.id}
          whenPostClicked={props.onPostSelection}
          />
        )}
      </div>
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func
};

export default PostList;