import React from 'react'

import Layout from '../components/Layout'
import stockData from '../data/stockData'

export default function stock() {

    var totalStock = 0;
    for(var i=0; i < stockData.length; i++) {
        totalStock += stockData[i].stock;
    }
    
    return (
        <Layout>
            <div className="welcome">
                <h1>Stock</h1>
                <p>Local Warehouse</p>
            </div>

            <div className="dash-container">
                <div className="dash-card">
                    <div>
                        <h1>Total Inventory</h1>
                        <p>Local Warehouse</p>
                        <p className="num">{totalStock}</p>
                    </div>
                </div>

                <div className="dash-card">
                    <div>
                        <h1>Products</h1>
                        <p>Listed in Inventory</p>
                        <p className="num">{stockData.length}</p>
                    </div>
                </div>
            </div>

            <h1>Inventory List</h1>
            <ul className="stock-list">
                {
                    stockData.map((product) => {
                        return (
                            <li key={product.id}>
                                <h2>{product.product}</h2>
                                <p className="price">₹{product.price}</p>
                                <p className="qty">{product.stock}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </Layout>
    )
}
