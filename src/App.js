import logo from './logo.svg';
import React, {useRef,useState,useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './local.module.css';
import List from './list';
import { useGlobalContext } from './AppContext';

function App() {
  const globalData = useGlobalContext();
  console.log("myData: ", globalData);
  const headingDiv = useRef(null);



  return (
    <div className={styles.App}>
      <h1 className={styles.checking}> Fight The SATAN</h1>
      <h2>what is Power</h2>
      <div className="btns">
      {/* onMouseLeave={handleHoshLeave} onMouseMove={handleHoshMove} */}
        <span>
          <button className={styles.btnGap + " " + styles.menuBtn + ' btn' + ' btn-danger' }
          onMouseLeave={globalData.handleMouseLeave} 
          onMouseOver={(e) => globalData.handleMouseOver(e)}
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
    </div>
  );
}

export default App;
