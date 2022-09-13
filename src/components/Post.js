import React from 'react';
import PropTypes from 'prop-types';


function Post(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenPostClicked(props.id)}>
        <h3>{props.title}</h3>
        <h3>{props.author}</h3>
      </div>
    </React.Fragment>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  // upVotes: PropTypes.number,
  // downVotes: PropTypes.number,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func,
};

export default Post;