import * as React from "react"

import '../index.css'
import '../styles.scss'

import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout>
      <div className="welcome">
        <h1>Hello, Rish Mungia</h1>
        <p>Welcome back.</p>
      </div>
      
      <div className="dash-container">
        <div className="dash-card">
          <div>
            <h1>Sales</h1>
            <p>March 2022</p>
            <p className="num">₹50,000</p>
          </div>
          <div className="progress">
            <p>45%</p>
          </div>
        </div>
        <div className="dash-card">
          <div>
            <h1>Stock</h1>
            <p>Warehouse</p>
            <p className="num">420</p>
          </div>
          <div className="progress">
            <p>85%</p>
          </div>
        </div>
        <div className="dash-card">
          <div>
            <h1>Wallet</h1>
            <p>All Transactions</p>
            <p className="num">₹42,000</p>
          </div>
          <div className="progress">
            <p>+19%</p>
          </div>
        </div>
        <div className="dash-card">
          <div>
            <h1>Products Sold</h1>
            <p>Unique Products</p>
            <p className="num">69</p>
          </div>
          <div className="progress">
            <p>42%</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage