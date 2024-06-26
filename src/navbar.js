import React from 'react';
import styles from './local.module.css';
import List from './list';
import { useGlobalContext } from './AppContext';


function Navbar(){

    const globalData = useGlobalContext();

    return (
        <div className={styles.App}>
            <div className='header'>
             <h1 style={{color:"yellow"}}> Fight The SATAN</h1>
            </div>
          
      
            <div className="btns">
    
                <span>
                    <button className={styles.btnGap + " " + styles.menuBtn + ' btn' + ' btn-danger' }
                        onMouseLeave={globalData.handleProductsLeave} 
                        onMouseOver={(e) => globalData.handleProductsEnter(e)}
                    >Products</button>
                    <button className={styles.btnGap + " " + styles.menuBtn + ' btn' + ' btn-danger' }
                        onMouseLeave={globalData.handlePaymentLeave} 
                        onMouseOver={(e) => globalData.handlePaymentEnter(e)}
                    >PayMent</button>

                    <button className={styles.btnGap + " " + styles.menuBtn + ' btn' + ' btn-danger' }
                        onMouseLeave={globalData.handleAboutLeave} 
                        onMouseOver={(e) => globalData.handleAboutEnter(e)}
                    >About</button>

                    <span style={{display:'inline'}}>
                        <List isProductList={globalData.isProductList}
                        isPaymentList={globalData.isPaymentList}
                        isAboutList={globalData.isAboutList}
                        power={'GoodHealth'} myList={globalData.myList} />
                    </span>
                </span>
            </div>

            <div>
                <button > Sign In</button>
            </div>
        </div>
    )
}

export default Navbar;