import React from 'react'
import customerData from '../data/CustomerData'

export default function customerDetails({custScreen, setCustScreen}) {

    var data = customerData[custScreen.id];

    return (
        <>
            <div 
                className="cust-details-bg"
                style={custScreen.isOpen ? {opacity: 1, pointerEvents: "unset"} : null}    
            ></div>
            <div className="cust-details-container" style={custScreen.isOpen ? {opacity: 1, pointerEvents: "unset", transform: "translate(-50%, -50%)"} : null}>
                {data ? 
                    <>
                        <h1>Purchase History</h1>
                        <h2>{data.name}</h2>
                        <button 
                            onClick={() => {
                                setCustScreen({id: custScreen.id, isOpen: false});
                                setTimeout(() => setCustScreen({id: -1, isOpen: false}), 250);
                            }}
                        >X</button>
                        <ul>
                        {
                            data.purchaseDetails.map((purchase) => {
                                return (
                                    <li key={purchase.id}>
                                        <h1>{purchase.product}</h1>
                                        <p>QTY {purchase.quantity} | ₹{purchase.price}</p>
                                        <p className="pur-date">{purchase.date}</p>
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </> : <h1>404 Not Found</h1>}
            </div>
        </>
    )
}
