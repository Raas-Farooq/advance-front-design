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
    const [linkAvailability, setLinkAvailability] = useState({
      isProductList: false, 
      isPaymentList:false, 
      isAboutList:false
    });
    const [isActive, setIsActive] = useState(false);
    const [myList, setMyList] = useState([]);
    const hideTimeoutRef = useRef(null);

  
  
   const handleEnter = useCallback((list, type)  => {
        return debounce((e) => {
          e.preventDefault();
          console.log("handle Enter useContext Runs")
          if(hideTimeoutRef.current){
            clearTimeout(hideTimeoutRef.current);
          }
          hideTimeoutRef.current = setTimeout(() => {
            setLinkAvailability((prevState) => ({...prevState, [type]:true}))
            // myList.styles.backgroundColor='none';
            // myList.styles.height=0;
            setMyList(list);   
          
          },100);
        },150)

  },[])
    
    const handleLeave = useCallback((type) => {
      return debounce((e) => {
        e.preventDefault();
        hideTimeoutRef.current = setTimeout(() => {
          setMyList([])
          setLinkAvailability((prevState) => ({...prevState, [type]: false}))  
        },200);
      }, 150)   
}, []);




useEffect(() => {
  return () => {

    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
  };
}, []);



    return <AppContext.Provider value=
    {{

      ...linkAvailability,
      myList,
      handleProductsEnter: handleEnter(['Apples', 'Adversity', 'GoingOn', 'Present'],'isProductList'),
      handleProductsLeave:handleLeave('isProductList'),
      handleAboutEnter: handleEnter(['Personal Goals', 'Strengths', 'Weaknesses', 'Being There'],'isAboutList'),
      handlePaymentEnter:handleEnter(['Tiger', 'Belief', 'Action', 'Being There'],'isPaymentList'),
      handleAboutLeave:handleLeave('isAboutList'),
      handlePaymentLeave:handleLeave('isPaymentList'),
      
    }}> {children} </AppContext.Provider>

}

const useGlobalContext = () => {
    return useContext(AppContext);
}
export {AppContext, AppContextFun, useGlobalContext};
