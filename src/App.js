import React from 'react';
import NavBar from './components/nav-bar';
import Homepage from './components/homepage';
import Footer from './components/footer';
import './css/app.css';
import './css/vars.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Homepage />
      <Footer />
    </React.Fragment>
  );
}

export default App;
