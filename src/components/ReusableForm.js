import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.postSubmissionHandler}>
        <input
          type='text'
          name='title'
          placeholder='Title' />
        <input
          type='text'
          name='author'
          placeholder='Author' />
        <textarea
          name='body'
          placeholder='Describe your issue.' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  postSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;