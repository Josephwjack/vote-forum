import React from "react";
import PropTypes from "prop-types";


function ReusableForm(props) {
  const reusableFormStyles = {
    width: '600px',
    border: '2px solid #dadada',
    borderRadius: '7px',
    
  }
  return (
    <React.Fragment>
      <div className="form-group d-flex flex-row justify-content-center my-4">
        <form onSubmit={props.postSubmissionHandler}>
          <div className='col my-2'>
            <input bsSize="lg" style={reusableFormStyles}
              className="mx-3"
              type='text'
              name='title'
              placeholder='Title' />
          </div>
          <div className='col my-2'>
            <input style={reusableFormStyles}
              className="mx-3"
              type='text'
              name='author'
              placeholder='Author' />
          </div>
          <div className='col my-2'>
            <textarea style={reusableFormStyles}
              className="mx-3"
              name='body'
              placeholder='Describe your issue.' />
          </div>
          <div className="d-flex justify-content-center">
            <button className="d-flex justify-content-center" type='submit'>{props.buttonText}</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  postSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;