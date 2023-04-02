import React from 'react';
import "./ProductContainer.css"

function  ProductContainer (props) {
    return ( 
        <div className=' ProductContainer-div '>
            {props.children}
        </div>
     );
}

export default ProductContainer;
