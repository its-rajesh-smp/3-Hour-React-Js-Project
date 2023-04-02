import React, { useContext } from 'react';
import "./App.css"
import Input from '../Input/Input';
import ProductContainer from "../Product Container/ProductContainer.jsx"

import CONTEXT from '../../Context/Context';

function App(props) {
    console.log("RENDER");
    // CONTEXT
    const context=useContext(CONTEXT)

    return (
        <div className=' App-div '>
            
            <Input />

            <h1>Total: <span>{context.SETTOTAL}</span> </h1>

            <ProductContainer>

               {context.SETDATA}

            </ProductContainer>


        </div>
    );
}

export default App;
