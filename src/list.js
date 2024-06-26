import myStyles from './local.module.css';

function List(props){

    return (
        <>
            {(props.isProductList || props.isPaymentList || props.isAboutList) && 
            <ul 
                    className={myStyles.list} >
                    {props.myList.map(item => {
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