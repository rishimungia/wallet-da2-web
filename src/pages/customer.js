import React, {useState} from 'react'
import Layout from '../components/Layout'
import CustomerDetails from '../components/CustomerDetails'

import customerData from '../data/CustomerData'

export default function Customer() {
  const [custScreen, setCustScreen] = useState({id: -1, isOpen: false});

  return (
    <>
      <Layout>
          <div className="welcome">
              <h1>Customer Details</h1>
          </div>
          
          <div className="customer-grid-container">
            {
              customerData.map((customer) => {
                return (
                  <div className="customer-card" key={customer.id}>
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="customer-img" />
                    <h1>{customer.name}</h1>
                    <p>{customer.phone}</p>
                    <button
                      onClick={() => {setCustScreen({id: customer.id, isOpen: true})}}
                    >
                      View Details
                    </button>
                  </div>
                ) 
              })
            }
          </div>
      </Layout>

      <CustomerDetails custScreen={custScreen} setCustScreen={setCustScreen}/>
    </>
  )
}
