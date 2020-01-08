import React from 'react';
import NavBar from './components/nav-bar';
import Homepage from './components/homepage';
import './css/app.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Homepage />
    </React.Fragment>
  );
}

export default App;
