import '../App.css';
import React from 'react';
import PostControl from "./PostControl";
import Header from './Header';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Grid } from '@mui/material';

function App() {
  return (
    <React.Fragment>
        <Grid item><Header/></Grid> 
        
          <PostControl/>
         
    </React.Fragment>
  );
}



export default App;
