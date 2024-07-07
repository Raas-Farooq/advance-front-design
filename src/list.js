import myStyles from './local.module.css';
import { useGlobalContext} from './AppContext'; 
import React, {useState,useEffect} from 'react';


function List(props){
    const {menuVisible, menuWidth} = props;
    const globalStates = useGlobalContext();
    const [stateActive, setStateActive] = useState(false);
   
            
    const {isAboutList, isProductList, isPaymentList, myList} = globalStates;
    
    const stateTrue = isAboutList || isProductList || isPaymentList;

    console.log("myList ", myList)
    useEffect(() => {
        setStateActive(stateTrue);
        
        if (props.menuVisible) {
            globalStates.handleProductsEnter();
            globalStates.handlePaymentEnter();
            globalStates.handleAboutEnter()
        } 
    }, [stateTrue, stateActive])
    return (
        <>
            {(stateTrue) && 
            
            <ul 
                    className = {menuVisible ? myStyles.fullList : myStyles.list}
                    style={menuVisible ? {width:`${menuWidth}px`}: {}} 
                    onMouseOver={(e) => {
                        if(!props.menuVisible){
                            if(isProductList) globalStates.handleProductsEnter(e);
                            if(isPaymentList) globalStates.handlePaymentEnter(e);
                            if(isAboutList) globalStates.handleAboutEnter(e)
                
                        } 
                    }
                }      

                    onMouseLeave={(e) => 
                        props.menuVisible ? '' : globalStates.handleMouseLeave()
                        // props.menuVisibility(!props.menuVisible);
                        
            
                    }
                    >
                    {myList.map((item, ind) => {
                    return <li 
                    key={ind}
                    className={myStyles.liItem}
                    > {item} </li>
                    })
                     }
            </ul>}
          </>
    )
}


export default List;

// isProductList && globalStates.handleProductsLeave
//                         || globalStates.isPaymentList && globalStates.handlePaymentLeave 
//                         || globalStates.isAboutList && globalStates.handleAboutLeave