import React, {useRef, useState} from 'react';
import styles from './local.module.css';
import List from './list';
import {FaBars, FaYoutube} from 'react-icons/fa';

import { useGlobalContext } from './AppContext';


function Navbar(){
    
    const globalData = useGlobalContext();
    const {isAboutList, isPaymentList, isProductList} = globalData;
    const isActive = isAboutList || isPaymentList || isProductList;
    const btns = useRef(null);
    const [menuVisible, setMenuVisible] = useState(false);

    const linksButtons = [
        {name:'Products', handleEnter:globalData.handleProductsEnter, handleLeave:globalData.handleProductsLeave},
        {name:'Payment', handleEnter:globalData.handlePaymentEnter, handleLeave:globalData.handlePaymentLeave},
        {name:'About', handleEnter:globalData.handleAboutEnter, handleLeave:globalData.handleAboutLeave}
    ] 

    const handleMenuClick = (e) => {
        e.preventDefault();
        globalData.handleAboutEnter(e);
        
        setMenuVisible(!menuVisible);
      
        linksButtons.map(btn => btn.handleEnter);
        console.log("btns.current.classList", btns.current.classList);
        console.log("isProductList: ", isProductList);
        console.log("isAboutList: ", isAboutList)
    }
    return (

        <div className={styles.App}>
            <div className='header'>
            <h1 style={{color:"red"}} className={styles.motto}> Fight The SATAN</h1>
            </div>
        
            
            <div ref={btns} className={`${styles.btns} ${menuVisible? '' : styles.hideBtns}`}>
    
            
                {linksButtons.map(link => 
                   
                    <button 
                    className={`${styles.btnGap} ${styles.menuBtn} btn btn-danger` }
                    onMouseEnter={link.handleEnter}
                    onMouseLeave={link.handleLeave}
                    >{link.name}</button>
                    
                    
                )}

                <span style={{display:'inline'}}>
                    {isActive &&  <List isProductList={globalData.isProductList}
                    myList={globalData.myList} />}
                    
                </span>
                
            </div>

            <div>
                <button className={styles.signIn}> Sign In</button>
            </div>
            <div className={`${styles.menuBar} btn btn-info`} onClick={handleMenuClick}><FaBars /></div>
        </div>
  
    )
}

export default Navbar;

// const linksButtons = [
//     {name:'Products', handleEnter:globalData.handleProductsEnter, handleLeave:globalData.handleProductsLeave},
//     {name:'Payment', handleEnter:globalData.handlePaymentEnter, handleLeave:globalData.handlePaymentLeave},
//     {name:'About', handleEnter:globalData.handleAboutEnter, handleLeave:globalData.handleAboutLeave}
// ] 

// const handleMenuClick = (e) => {
//     e.preventDefault();
//     globalData.handleAboutEnter(e);
    
//     setMenuVisible(!menuVisible);
  
//     linksButtons.map(btn => btn.handleEnter);
//     console.log("btns.current.classList", btns.current.classList);
//     console.log("isProductList: ", isProductList);
//     console.log("isAboutList: ", isAboutList)
// }

// when the menuBar button is clicked i'm trying to show all the lists by this line 'linksButtons.map(btn => btn.handleEnter);' since 'linksButtons' contains all the 'functions' but it is not working whereas this line of cod3e 'globalData.handleAboutEnter(e);' is indeed working which is showing the list related to 'About'