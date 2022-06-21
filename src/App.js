import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Navbar from './components/Navbar';
import Routes from './components/Routes';

function App() {
  return (
    <>
      <Navbar />
      <Routes />
    </>
  );
}

export default App;
