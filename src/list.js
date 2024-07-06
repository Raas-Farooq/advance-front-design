import myStyles from './local.module.css';
import { useGlobalContext} from './AppContext'; 
import React, {useState,useEffect} from 'react';


function List(props){
    const globalStates = useGlobalContext();
    const [stateActive, setStateActive] = useState(false);
    const functions = [
        {handleOver: globalStates.handleProductsEnter},
        {handleOver: globalStates.handlePaymentEnter},
        {handleOver: globalStates.handleAboutEnter}
    ]

    const {isAboutList, isProductList, isPaymentList, myList} = globalStates;
    console.log("List menuVisibility: ", props.menuVisible);
    const stateTrue = isAboutList || isProductList || isPaymentList;
    // console.log("isProductList ", isProductList);
    // console.log("isPaymentList ", isPaymentList);
    // console.log("isAboutList ", isAboutList);
    useEffect(() => {
        setStateActive(stateTrue);
        // console.log("stateActive: ", stateActive)
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
                    
                    className={props.menuVisible ? myStyles.fullList : myStyles.list} 
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
                    {myList.map(item => {
                    return <li 
                    key={item} 
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