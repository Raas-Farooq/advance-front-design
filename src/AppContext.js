import React, {useContext, useState, useEffect,useRef, useCallback} from 'react';


const AppContext = React.createContext();



const AppContextFun = ({children}) => {
    const [isPaymentList, setPaymentList] = useState(false);
    const [isProductList, setProductList] = useState(false);
    const [isAboutList, setAboutList] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [myList, setMyList] = useState([]);
    const timeoutRef = useRef(null);
    
    let [menuVisible, setMenuVisible] = useState(false);
  
  const handleProductsEnter = (e) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {

      setPaymentList(false);
      setAboutList(false);
      setProductList(true);
      
      setMyList((prev) => {
        if(prev.length <=5 ){
          return ['Apples', 'Adversity', 'GoingOn', 'Present'];
        }

        return prev;
      });
  
    }, 100
  )
    
  }
  const handlePaymentEnter = (e) => {
    clearTimeout(timeoutRef.current);
    console.log("payment Runs");
    timeoutRef.current = setTimeout(() => {
      setPaymentList(true);
      setAboutList(false);
      setProductList(false);

      setMyList(prev => {
        if(prev.length <= 5){
          return ['Tiger', 'Belief', 'Action', 'Being There']
        }
        return prev;
      });
    },100) 
  }
  const handleAboutEnter = (e) =>  {
    clearTimeout(timeoutRef.current);
    console.log("About Runs");
    timeoutRef.current = setTimeout(() => {
      setPaymentList(false);
      setProductList(false);
      setMyList((prev) => {
        if(prev.length <= 5){
          setAboutList(true);
          return (['Personal Goals', 'Strengths', 'Weaknesses', 'Being There'])
        }
        return prev;
      })
      
    },100)
    
  }
    
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
}, [myList]);



    return <AppContext.Provider value=
    {{
      menuVisible,
      setMenuVisible,
      isProductList,
      isPaymentList,
      isAboutList,
      myList,
      handleProductsEnter,
      handlePaymentEnter,
      handleAboutEnter,
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
