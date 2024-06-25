import logo from './logo.svg';
import React, {useRef,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './local.module.css';

function App() {

  const headingDiv = useRef(null);
  const [isListAvailable, setIsListAvailable] = useState(false);
  const [myList, setMyList] = useState([]);
  const [isAboveList, setIsAboveList] = useState(false);


  function handleListEnter(e){
    e.preventDefault();
    const list = ['Believe', 'Effort', 'MassiveAction', 'Middle Way', 'Be Patient']
    setIsAboveList(true);
    setIsListAvailable(true);
    console.log("Above List:", isAboveList);
  }

  function handleListLeave(e){
    e.preventDefault();
    setIsListAvailable(false);
    setIsAboveList(false);
    console.log("Above List:", isAboveList);
  }

  function handleMouseOver(e){
    e.preventDefault();
    console.log("Running Mouse Over");
    setIsListAvailable(true);
    console.log("Above List:", isAboveList);
  }

  function handleMouseLeave(e){
    e.preventDefault();
    console.log("Running Mouse Leave");
    setIsListAvailable(false)

  }

  return (
    <div className={styles.App}>
      <h1 className={styles.checking}> Fight The SATAN</h1>
      <h2>what is Power</h2>
      <div className="btns">
      {/* onMouseLeave={handleHoshLeave} onMouseMove={handleHoshMove} */}
        <button className={styles.menuBtn + ' btn' + ' btn-danger' }
        onMouseLeave={handleMouseLeave} 
        onMouseOver={(e) => handleMouseOver(e)}
         >Believe</button>
        <div style={{display:'inline'}}>
        {isListAvailable && 
          <ul 
          className={styles.list} 
          style={{display:"flex", listStyle:'none'}}
          onMouseLeave={handleListLeave}
          onMouseEnter = {handleListEnter} >
            {myList.map(item => {
              return <li 
              key={item} 
              className={styles.liItem}
              > {item} </li>
            })
          }
          </ul>}
        </div>
      </div>
    </div>
  );
}

export default App;
