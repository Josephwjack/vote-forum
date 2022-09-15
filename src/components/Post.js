import React from 'react';
import PropTypes from 'prop-types';


function Post(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenPostClicked(props.id)}>
        <h2>{props.title}</h2>
        <h6>{props.author}</h6>
        <p><em>{props.formattedWaitTime}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  upVotes: PropTypes.number,
  downVotes: PropTypes.number,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func,
  formattedWaitTime: PropTypes.string
};

export default Post;