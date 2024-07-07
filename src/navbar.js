import React, {useRef, useState,useEffect} from 'react';
import styles from './local.module.css';
import List from './list';
import {FaBars, FaYoutube, FaTimes} from 'react-icons/fa';
import windowSize from './windowSize.js';
import { useGlobalContext } from './AppContext';


function Navbar(){
    
    const globalData = useGlobalContext();
    const window = windowSize();
    const [menuWidth, setMenuWidth] = useState(0);
    const [btnsVisible, setBtnsVisible] = useState(true);
    const [hideOthers, setHideOthers] = useState(false);
    const {isAboutList, isPaymentList, isProductList, menuVisible, setMenuVisible} = globalData;
    const isActive = isAboutList || isPaymentList || isProductList;
    const btns = useRef(null);
    
    const IndividualBtn = useRef(null);


    const linksButtons = [
        {name:'Products', handleEnter:globalData.handleProductsEnter},
        {name:'Payment', handleEnter:globalData.handlePaymentEnter},
        {name:'About', handleEnter:globalData.handleAboutEnter}
    ] 

    useEffect(() => {
        console.log(
            "menuVisible Inside useEffect: ", menuVisible
        )
        if(window.width > 645){
            globalData.handleMouseLeave();
            setMenuVisible(false);
            setHideOthers(false);
            if(IndividualBtn.current){
                setBtnsVisible(true);
            }
        }
        else{
            setHideOthers(true);
            setBtnsVisible(false);
        }
        if(menuVisible){
            const updatedWidth = ( 80 / 100 ) * menuWidth;
            setMenuWidth(updatedWidth);
        }
        
    }, [window.width,btnsVisible, menuVisible])


    const handleMenuClick = (e) => {
        e.preventDefault();
        // globalData.handleAboutEnter(e);
        
        setMenuVisible((prev) => {
            const updatedMenuVisible = !prev;
            console.log("updated Menu: ", updatedMenuVisible);
            if(updatedMenuVisible){
                globalData.setProductList(true);
                globalData.setPaymentList(true);
                globalData.setAboutList(true);
        
                const newWidth = (80 / 100) * window.width;
                setMenuWidth(newWidth);
                

                // Set myList to include all items
                globalData.setMyList([
                    'Apples', 'Adversity', 'GoingOn', 'Present',
                    'Believe', 'Effort', 'MassiveAction', 'Middle Way', 'Be Patient',
                    'Personal Goals', 'Strengths', 'Weaknesses', 'Being There'
                ]);
            }
            return updatedMenuVisible;
        });
    }
    
    
    return (

        <div className={styles.App}>
            <div className='header'>
            <h1 style={{color:"#FF0099"}} className={hideOthers ? styles.hideMotto: styles.motto }> Fight The SATAN</h1>
            </div>
        
            
            <div ref={btns} className={` ${menuVisible? `${styles.btns}`: styles.hideBtns}`}>
    
            
                {linksButtons.map((link,ind) => 
                   
                    <button 
                    key={ind}
                    ref={IndividualBtn}
                    className={`${btnsVisible ?  `${styles.menuBtn} btn btn-warning `: styles.hideEachBtn}` }
                    onMouseEnter={link.handleEnter}
                    onMouseLeave={globalData.handleMouseLeave}
                    >{link.name}</button>
                    
                    
                )}

                <span style={{display:'inline'}}>
                    {isActive &&  <List myList={globalData.myList} menuVisible={menuVisible} menuWidth={menuWidth} />}   
                </span>
                
            </div>

            <div>
    
                <button className={styles.signIn}> Sign In</button>
            </div>
            <div className={menuVisible ? `${styles.closeBtn} btn btn-warning` : `${styles.menuBar} btn btn-warning`} onClick={handleMenuClick}>{menuVisible ? <FaTimes /> : <FaBars />}</div>
        </div>
  
    )
}

export default Navbar
