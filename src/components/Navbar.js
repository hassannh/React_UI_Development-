import React from 'react'
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? 'underline' : 'none', 
      color :isActive ? '#5F9EA0' : '#C70039',
      textUnderlineOffset: "6px",
    }
  }
  return (
    <nav>
        <NavLink style={navLinkStyles} to='/'> Home </NavLink>
        <NavLink style={navLinkStyles} to='/about'> about </NavLink>
        <NavLink style={navLinkStyles} to='/categories'> Categories </NavLink>
        <NavLink style={navLinkStyles} to='/register'> Register </NavLink>
    </nav>
  )
}
