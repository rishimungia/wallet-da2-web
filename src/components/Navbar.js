import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <h1>TechWarez</h1>
        <ul className="nav-links">
            <li className="nav-link"><a href='/'>Home</a></li>
            <li className="nav-link"><a href='/stock'>Stock</a></li>
            <li className="nav-link"><a href='/customer'>Customers</a></li>
            <li className="nav-link"><a href='/'>Logout</a></li>
        </ul>
    </nav>
  )
}