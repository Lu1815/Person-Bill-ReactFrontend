import React from 'react'
import { NavLink } from 'react-router-dom';

const inactiveLink = 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
const activeLink = 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'

const linkStyle = (navData) => 
navData.isActive ? activeLink : inactiveLink;

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="relative flex items-center justify-center h-16">
          <div className="flex space-x-4">
            <NavLink to="/" className={linkStyle}>Persona</NavLink>
            <NavLink to="/factura" className={linkStyle}>Factura</NavLink>
          </div>
      </div>
    </nav>
  )
}

export default Navbar