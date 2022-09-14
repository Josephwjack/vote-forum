import '../App.css';
import React from 'react';
import PostControl from "./PostControl";
import Header from './Header';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <PostControl/>
    </React.Fragment>
  );
}

// npm install redux@4.2.0 react-redux@8.0.2

export default App;
