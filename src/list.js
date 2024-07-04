import myStyles from './local.module.css';
import { useGlobalContext} from './AppContext'; 
import React, {useState,useEffect} from 'react';


function List(){
    const globalStates = useGlobalContext();
    const [stateActive, setStateActive] = useState(false);

    const {isAboutList, isProductList, isPaymentList, myList} = globalStates;

    const stateTrue = isAboutList || isProductList || isPaymentList;

    useEffect(() => {
        setStateActive(stateTrue);
        console.log("stateActive: ", stateActive)
    }, [stateTrue, stateActive])
    return (
        <>
            {(stateTrue) && 
            
            <ul 
                    
                    className={stateActive ? myStyles.list : myStyles.emptyList} 
                    onMouseOver={(e) => {
                        if(isProductList) globalStates.handleProductsEnter(e);
                        if(isPaymentList) globalStates.handlePaymentEnter(e);
                        if(isAboutList) globalStates.handleAboutEnter(e)}
                    }
                        

                    onMouseLeave={globalStates.isProductList && globalStates.handleProductsLeave
                        || globalStates.isPaymentList && globalStates.handlePaymentLeave 
                        || globalStates.isAboutList && globalStates.handleAboutLeave}
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