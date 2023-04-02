import React, { useEffect, useState } from "react";
import CONTEXT from "./Context";
import Product from "../Components/Product/Product";

const PROVIDER = (props) => {

    // State For Total 
    const [SETTOTAL, SETTOTAL_FUCN] = useState();
    // State For Show Data 
    const [SETDATA, SETDATA_FUNC] = useState([]);
    // State To GET Data from Input Field When Button is clicked
    const [GETDATA, GETDATA_FUNC] = useState("");
    //State To Delete Data from Local Storage And Dom
    const [GETIDDELETE, GETIDDELETE_FUNC] = useState("")


    /* -------------------------------------------------------------------------- */
    /*                            GET DATA  FROM LOCAL                            */
    /* -------------------------------------------------------------------------- */


    useEffect(() => {
        // Keys From Local Storage
        const DATA_KEYS = Object.keys(localStorage);
        // Define Total Amount variable
        let TOTALAMOUNT = 0
        const ARRAY_OF_DATA = DATA_KEYS.map((val) => {
            // Items From LocalStorage
            const OBJ = JSON.parse(localStorage.getItem(val));
            // Increament Total
            TOTALAMOUNT += (Number(OBJ.price) * Number(OBJ.quantity))
            return (
                <Product
                    name={OBJ.name}
                    price={OBJ.price}
                    quantity={OBJ.quantity}
                    key={OBJ.key}
                    id={OBJ.key}
                />
            );
        });
        // Updating Array
        SETDATA_FUNC(ARRAY_OF_DATA);
        // Updating Total Amount
        SETTOTAL_FUCN(TOTALAMOUNT)
    }, []);



    /* -------------------------------------------------------------------------- */
    /*                          ADD DATA INTO LOCAL STORAGE                       */
    /* -------------------------------------------------------------------------- */



    useEffect(() => {
        if (GETDATA !== "") {
            // Generating Key
            const key = Math.random();
            GETDATA.key = key;

            // Uploading Data in LocalStorage
            localStorage.setItem(key, JSON.stringify(GETDATA));

            // UPDATE THE DOM
            SETDATA_FUNC((prev) => {
                const NEWPRODUCT = (
                    <Product
                        name={GETDATA.name}
                        price={GETDATA.price}
                        quantity={GETDATA.quantity}
                        key={GETDATA.key}
                        id={GETDATA.key}
                    />
                );
                return [NEWPRODUCT, ...prev];
            });

            // Updating Total Amount
            SETTOTAL_FUCN((prev) => {
                return prev + (Number(GETDATA.price) * Number(GETDATA.quantity))
            })
        }
    }, [GETDATA]);



    /* -------------------------------------------------------------------------- */
    /*                         DELETE DATA ON BUTTON CLICK                        */
    /* -------------------------------------------------------------------------- */

    useEffect(() => {
        if (GETIDDELETE != "") {


            // Remove From Local Storage
            localStorage.removeItem(GETIDDELETE)
            console.log("DELETE");
            // Update the dom
            SETDATA_FUNC((prev) => {
                return (
                    prev.filter((val) => {

                        if (val.props.id === GETIDDELETE) {
                            // Update the total
                            SETTOTAL_FUCN((prev) => {
                                return prev - ((val.props.price) * (val.props.quantity))
                            })
                        }
                        else {
                            return val
                        }

                    })
                )
            })
        }
    }, [GETIDDELETE])


    return (
        <CONTEXT.Provider value={{ SETDATA, GETDATA_FUNC, SETTOTAL, GETIDDELETE_FUNC }}>
            {props.children}
        </CONTEXT.Provider>
    );
};

export default PROVIDER;
