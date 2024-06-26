import React, {useContext, useState} from 'react';


const AppContext = React.createContext();

const AppContextFun = ({children}) => {
    const [isProductList, setProductList] = useState(false);
    const [isPaymentList, setPaymentList] = useState(false);
    const [myList, setMyList] = useState([]);
    const [isAboutList, setAboutList] = useState(false);
  
  
    function handleMouseOver(e){
      e.preventDefault();
      const list = ['Believe', 'Effort', 'MassiveAction', 'Middle Way', 'Be Patient']
      setMyList(['Apples', 'Adversity', 'GoingOn', 'Present']);
      setProductList(true);
      console.log("productLIst inside App fun:", isProductList);
    }
  
    function handleMouseLeave(e){
      e.preventDefault();
      console.log("productLIst handleMouseLeave:", isProductList);
      setProductList(false);
      setMyList([])
    }
  
  
    function handlePaymentEnter(e){
      e.preventDefault();
      console.log("Running Mouse Over");
      setPaymentList(true);
      setMyList(['Believe', 'Effort', 'MassiveAction', 'Middle Way', 'Be Patient'])
    }
  
    function handlePaymentLeave(e){
      e.preventDefault();
      console.log("Running Mouse Leave");
      setPaymentList(false);
      setMyList([])
    }
  
  
    function handleAboutEnter(e){
      e.preventDefault();
  
      setAboutList(true);
      setMyList(['Personal Goals', 'Strengths', 'Weaknesses', 'Being There'])
    }
    
    function handleAboutLeave(e){
      e.preventDefault();
  
      setAboutList(false);
      setMyList([]);
    }


    return <AppContext.Provider value=
    {{handleMouseOver, 
    handleMouseLeave,
    handleAboutEnter,
    handlePaymentEnter,
    handleAboutLeave,
    handlePaymentLeave,
    isProductList,
    isPaymentList,
    isAboutList,
    myList
    }}> {children} </AppContext.Provider>

}

const useGlobalContext = () => {
    return useContext(AppContext);
}
export {AppContext, AppContextFun, useGlobalContext};
