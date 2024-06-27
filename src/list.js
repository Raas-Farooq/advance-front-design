import myStyles from './local.module.css';
import { useGlobalContext, useState} from './AppContext'; 


function List(){
    const globalStates = useGlobalContext();
    // const statesList = [globalStates.isProductList, globalStates.isPaymentList,globalStates.isAboutList];
    // console.log("globalStates ", globalStates);
    // for (const state of statesList) {
    //     if(state){
    //         console.log("state: ", state)
    //         return state;
    //     }
    // }
  
    return (
        <>
            {(globalStates.isProductList || globalStates.isPaymentList || globalStates.isAboutList) && 
            <ul 
                    className={myStyles.list} 
                    onMouseOver={globalStates.isProductList && globalStates.handleProductsEnter
                         || globalStates.isPaymentList && globalStates.handlePaymentEnter 
                         || globalStates.isAboutList && globalStates.handleAboutEnter}

                    onMouseLeave={globalStates.isProductList && globalStates.handleProductsLeave
                        || globalStates.isPaymentList && globalStates.handlePaymentLeave 
                        || globalStates.isAboutList && globalStates.handleAboutLeave}
                    >
                    {globalStates.myList.map(item => {
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