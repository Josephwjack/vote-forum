import React from "react";
import PropTypes from "prop-types";
import { Button } from '@mui/material';

function ReusableForm(props) {
  const reusableFormStyles = {
    width: '500px',
    border: '2px solid #dadada',
    
    
  }
  return (
    <React.Fragment>
      
      <div className="form-group d-flex flex-row justify-content-center my-4">
        <form onSubmit={props.postSubmissionHandler}>
          <div className='col my-2'>
            <input style={reusableFormStyles}
              className="mx-3"
              type='text'
              name='title'
              placeholder='Header' />
          </div>
          <div className='col my-2'>
            <input style={reusableFormStyles}
              className="mx-3"
              type='text'
              name='author'
              placeholder='Username' />
          </div>
          <div className='col my-2'>
            <textarea style={reusableFormStyles}
              className="mx-3"
              name='body'
              placeholder='Whats on your mind?' />
          </div>
          <div className="d-flex justify-content-center">
            <Button className="d-flex justify-content-center" type='submit'>{props.buttonText}</Button>
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