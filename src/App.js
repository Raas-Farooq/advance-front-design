import logo from './logo.svg';
import React, {useRef,useState,useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './local.module.css';
import Body from "./body.js"
import Navbar from './navbar.js';
import List from './list.js';
import { useGlobalContext } from './AppContext';

function App() {
  const globalData = useGlobalContext();
  const headingDiv = useRef(null);



  return (
    <>
      
      <Navbar />
      <Body />
      <div style={{height:"300px", backgroundColor:"red", width:"100%", position:"absolute", bottom:0}}>
        </div>
    </>
  );
}

export default App;
