import myStyles from './local.module.css';
import { useGlobalContext, useState} from './AppContext'; 


function List(){
    const globalStates = useGlobalContext();

    const {isAboutList, isProductList, isPaymentList, myList} = globalStates;

    const stateTrue = isAboutList || isProductList || isPaymentList;

    console.log("stateTrue", stateTrue);
    return (
        <>
            {(globalStates.isProductList || globalStates.isPaymentList || globalStates.isAboutList) && 
            <ul 
                    className={myStyles.list} 
                    onMouseOver={(e) => {
                        if(isProductList) globalStates.handleProductsEnter(e);
                        if(isPaymentList) globalStates.handlePaymentEnter(e);
                        if(isAboutList) globalStates.handleAboutEnter(e)}
                    }
                        

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