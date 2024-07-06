import React, {useContext, useState, useEffect,useRef, useCallback} from 'react';


const AppContext = React.createContext();

function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}


const AppContextFun = ({children}) => {
    const [isPaymentList, setPaymentList] = useState(false);
    const [isProductList, setProductList] = useState(false);
    const [isAboutList, setAboutList] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [myList, setMyList] = useState([]);
    const timeoutRef = useRef(null);

  
  
   const handleEnter = useCallback((list, type)  => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      switch (type) {
        case 'product':
          setProductList(true);
          break;
        case 'payment':
          setPaymentList(true);
          break;
        case 'about':
          setAboutList(true);
          break;
      }
      setMyList(list);
    }, 100);
  })
    
    const handleMouseLeave = ()=> {
      
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setProductList(false);
        setPaymentList(false);
        setAboutList(false);
        setMyList([]);
      }, 150);
};




useEffect(() => {
  return () => {

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };
}, []);



    return <AppContext.Provider value=
    {{

      isProductList,
      isPaymentList,
      isAboutList,
      myList,
      handleProductsEnter:() => handleEnter(['Apples', 'Adversity', 'GoingOn', 'Present'],'product'),
      handleAboutEnter: () => handleEnter(['Personal Goals', 'Strengths', 'Weaknesses', 'Being There'],'about'),
      handlePaymentEnter:() => handleEnter(['Tiger', 'Belief', 'Action', 'Being There'],'payment'),
      handleMouseLeave,
      setProductList,
      setAboutList,
      setPaymentList,
      setMyList
      
    }}> {children} </AppContext.Provider>

}

const useGlobalContext = () => {
    return useContext(AppContext);
}
export {AppContext, AppContextFun, useGlobalContext};
