import React, { useContext } from 'react';
import "./Product.css"
import CONTEXT from '../../Context/Context';


function  Product (props) {
    const context=useContext(CONTEXT)

    // Generate Total Number
    const total=Number(props.quantity) * Number(props.price)


    function onDeleteButtonClick(){
        context.GETIDDELETE_FUNC(props.id)
    }


    return ( 
        <div className=' Product-div '>
            
            <h1>{props.name}</h1>
            <h1>{props.quantity}</h1>
            <h1>{props.price}</h1>

            <h1>{total}</h1>

            <button onClick={onDeleteButtonClick}>Delete</button>
        </div>
     );
}

export default Product;
