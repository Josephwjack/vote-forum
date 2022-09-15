import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";
import { List } from "reactstrap";
import { Typography } from '@mui/material';

function PostList(props){

  return (
    <React.Fragment>    
      <div style={{
            display: 'block', width: "80vw", padding: 80, margin: 'auto', justifyContent: 'center', minHeight: '60vh'
        }}>
        <div className="col d-flex-row justify-content-center ">   
          <List type="unstyled">
            <Typography>
            {Object.values(props.postList).map((post) =>
            <Post
            whenPostClicked={props.onPostSelection} 
            title={post.title}
            author={post.author}
            body={post.body}
            upVotes={post.upVotes}
            downVotes={post.downVotes}
            id={post.id}
            key={post.id}
            formattedWaitTime={post.formattedWaitTime}/>
            )}
            </Typography>
          </List>
        </div>
      </div>
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func
};

export default PostList;