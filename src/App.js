import logo from './logo.svg';
import React, {useRef,useState,useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import Body from './body.js';
import { useGlobalContext } from './AppContext';
import Navbar from './navbar';


function App() {
  const globalData = useGlobalContext();
  return (
    <>
      <Navbar />
      <Body />
     
    </>
  );
}

export default App;
