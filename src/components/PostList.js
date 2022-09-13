import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props){

  return (
    <React.Fragment>
      <div>
        {props.postList.map((post) =>
        <Post
          title={post.title}
          author={post.author}
          body={post.body}
          id={post.id}
          whenPostClicked={props.onPostSelection}
          />
        )}
      </div>
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.array,
  onPostSelection: PropTypes.func
};

export default PostList;