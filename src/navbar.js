import React, {useRef, useState,useEffect} from 'react';
import styles from './local.module.css';
import List from './list';
import {FaBars, FaYoutube, FaTimes} from 'react-icons/fa';
import windowSize from './windowSize.js';
import { useGlobalContext } from './AppContext';


function Navbar(){
    
    const globalData = useGlobalContext();
    const window = windowSize();
   
    const [btnsVisible, setBtnsVisible] = useState(true);
    const [hideOthers, setHideOthers] = useState(false);
    const {isAboutList, isPaymentList, isProductList} = globalData;
    const isActive = isAboutList || isPaymentList || isProductList;
    const btns = useRef(null);
    let [menuVisible, setMenuVisible] = useState(false);
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
        if(window.width > 640){
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
        
        
    }, [window.width,btnsVisible, menuVisible])

    // const menuVisibility = (visiblility) => {
    //     console.log("visiblility inside Navbar ", visiblility);
    //     setMenuVisible(visiblility);
    // }


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
        
                
                // Set myList to include all items
                globalData.setMyList([
                    'Apples', 'Adversity', 'GoingOn', 'Present',
                    'Believe', 'Effort', 'MassiveAction', 'Middle Way', 'Be Patient',
                    'Personal Goals', 'Strengths', 'Weaknesses', 'Being There'
                ]);
            }
            return updatedMenuVisible;
    });
       
        // linksButtons.forEach(btn => btn.handleEnter(e));
        // console.log("btns.current.classList", btns.current.classList);
        // console.log("isProductList: ", isProductList);
        // console.log("isAboutList: ", isAboutList)
    }
    return (

        <div className={styles.App}>
            <div className='header'>
            <h1 style={{color:"red"}} className={hideOthers ? styles.hideMotto: styles.motto }> Fight The SATAN</h1>
            </div>
        
            
            <div ref={btns} className={` ${menuVisible? `${styles.btns}`: styles.hideBtns}`}>
    
            
                {linksButtons.map(link => 
                   
                    <button 
                    ref={IndividualBtn}
                    className={`${btnsVisible ?  `${styles.menuBtn} btn btn-warning `: styles.hideEachBtn}` }
                    onMouseEnter={link.handleEnter}
                    onMouseLeave={globalData.handleMouseLeave}
                    >{link.name}</button>
                    
                    
                )}

                <span style={{display:'inline'}}>
                    {isActive &&  <List myList={globalData.myList} menuVisible={menuVisible} />}
                    
                </span>
                
            </div>

            <div>
                <button className={styles.signIn}> Sign In</button>
            </div>
            <div className={`${styles.menuBar} btn btn-info`} onClick={handleMenuClick}>{menuVisible ? <FaTimes /> : <FaBars />}</div>
        </div>
  
    )
}

export default Navbar;

