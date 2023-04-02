import React, { useContext, useState } from 'react';
import "./Input.css"
import CONTEXT from '../../Context/Context';

function  Input (props) {

    // Context
    const context=useContext(CONTEXT);



    const[name,nameF]=useState("")
    const[price,priceF]=useState("")
    const[quantity,quantityF]=useState("")


    function onButtonClickSendData(e){
        e.preventDefault();
        if(name!=="" && price!=="" && quantity!==""){

            const NEWDATATOSEND={
                name,price,quantity
            }
            
            // Send To State.js
            context.GETDATA_FUNC(NEWDATATOSEND)
            
            nameF("")
            priceF("")
            quantityF("")
        }
    }



    return ( 
        <form className=' Input-div '>

            <input type="text" placeholder='Product Name'    value={name} onChange={(e)=>{nameF(e.target.value)}}/>
            <input type="text" placeholder='Product Price'   value={price} onChange={(e)=>{priceF(e.target.value)}}/>
            <input type="text" placeholder='Product Quantity' value={quantity} onChange={(e)=>{quantityF(e.target.value)}}/>
            
            <button onClick={onButtonClickSendData} >Add Product</button>
        </form>
     );
}

export default Input;
