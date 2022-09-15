import React from "react";
import PropTypes from "prop-types";
import { Button, Typography} from '@mui/material';
import {Card, CardBody, CardFooter, CardSubtitle, CardText, CardTitle} from 'reactstrap';

function PostDetails(props){

  const { post, onClickingDelete } = props;
  return (
    <React.Fragment>
      <div className="col d-flex justify-content-center text-center">
        <Typography>
          <Card style={{ width: '50rem', padding: '10px', margin: 0, float: 'none'}}>
            <CardBody>
             
            <CardTitle >
              <h1>{post.title}</h1>
              <hr/>
            </CardTitle>
              <CardSubtitle>
                <h5>Submitted by: {post.author}</h5>
              </CardSubtitle>
                <CardText>
                  <p>{post.body}</p>
                </CardText>
                <CardFooter>
                  <p>UpVotes: {parseInt(post.upVotes)} | DownVotes: {parseInt(post.downVotes)}</p>
                  <p>{post.formattedWaitTime}</p>
                </CardFooter>
              <hr/>
              <Button onClick={() => props.onClickingUpVote(post.id)}>UpVote</Button>
              <Button onClick={() => props.onClickingDownVote(post.id)}> DownVote </Button>
              <Button onClick={ props.onClickingEdit }>Edit Post</Button> 
              <Button onClick={() => onClickingDelete(post.id) }>Delete Post</Button>
            </CardBody>
          </Card>
        </Typography>
      </div>
    </React.Fragment>
  )
}

PostDetails.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingUpVote: PropTypes.func,
  onClickingDownVote: PropTypes.func,
  onClickingEdit: PropTypes.func,

};

export default PostDetails;