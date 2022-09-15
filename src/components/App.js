import '../App.css';
import React from 'react';
import PostControl from "./PostControl";
import Header from './Header';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function App() {
  return (
    <React.Fragment>
      <Header/>         
      <PostControl/>     
    </React.Fragment>
  );
}



export default App;
