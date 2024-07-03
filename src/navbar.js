import React from 'react';
import styles from './local.module.css';
import List from './list';
import {FaBars, FaYoutube} from 'react-icons/fa';

import { useGlobalContext } from './AppContext';


function Navbar(){
    
    const globalData = useGlobalContext();
    const {isAboutList, isPaymentList, isProductList} = globalData;
    const isActive = isAboutList || isPaymentList || isProductList;
    console.log("isProductList: ", isProductList)
    const linksButtons = [
        {name:'Products', handleEnter:globalData.handleProductsEnter, handleLeave:globalData.handleProductsLeave},
        {name:'Payment', handleEnter:globalData.handlePaymentEnter, handleLeave:globalData.handlePaymentLeave},
        {name:'About', handleEnter:globalData.handleAboutEnter, handleLeave:globalData.handleAboutLeave}
    ] 

    return (

        <div className={styles.App}>
            <div className='header'>
            <h1 style={{color:"red"}} className={styles.motto}> Fight The SATAN</h1>
            </div>
        
            
            <div className={styles.btns}>
    
            
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
            <div className={styles.menuBar}><FaBars /></div>
        </div>
  
    )
}

export default Navbar;