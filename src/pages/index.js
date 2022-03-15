import * as React from "react"

import '../index.css'
import '../styles.scss'

import Layout from '../components/Layout'


// Create a UI to generate the wallet for the Online Department store application. In the application create some 10 customers profile. show the purchase history, stock details in the wallet by using the python. 

// 1. Upload the PDF file including the screenshots and script file including the comments section.
// 2. Contents should be unique.  dont copy the contents from internet. 
// 3. All the students wallet should be unique. if same means "0" marks will be awarded. 
// 4. File name  should be Registernumber_name. if not 1 marks will be reduced.

const IndexPage = () => {
  return (
    <Layout>
      <div className="welcome">
        <h1>Hello, Shopkeeper</h1>
        <p>Welcome back.</p>
      </div>
      
      <div className="dash-container">
        <div className="dash-card">
          <div>
            <h1>Sales</h1>
            <p>March 2022</p>
            <p className="num">$500</p>
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
            <h1>Customers</h1>
            <p>Unique Customers</p>
            <p className="num">02</p>
          </div>
          <div className="progress">
            <p>+100%</p>
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
