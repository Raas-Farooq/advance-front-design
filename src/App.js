import logo from './logo.svg';
import React, {useRef,useState,useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
<<<<<<< HEAD
import styles from './local.module.css';
import List from './list.js';
=======
import Body from './body.js';
>>>>>>> feature/add-body
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
