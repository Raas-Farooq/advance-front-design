
import {useGlobalContext} from './AppContext.js';
import superStyles from './local.module.css';


function Body() {

  const allData = useGlobalContext();
  const hide = allData.menuVisible;
  
    return (

        <div style={{
       position:'absolute',
       top:0,
       left:0,
       right:0
     }}>
       <img 
         src="https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-222549-2166711.jpg&fm=jpg" 
         style={{
           width: "100%",
           height: "100%",
           objectFit: "cover"
         }}
         alt="Background"
       />
      <div>
        <h1 className={superStyles.headingOne} > {hide ? ' ' : 'Best Way of Life'} </h1>
        <h1 style={{ position:'absolute', top:"260px", color:"#FF00FF" , fontSize:"50px"}}> {hide ? ' ': 'In The World' } </h1>
      </div>
      <div className={superStyles.instruction}>
        <p> {hide ? '' : 'The benefits of adopting a contemplative practice—such as Prayer (Namaz), meditation, exercise/yoga, or journaling—have widespread effects not just on spirituality, but on physical and emotional health as well.'}</p>
      </div>
       
     </div>
        

    )
  }

  export default Body;

