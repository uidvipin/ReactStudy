import React from 'react'
import { useNavigate } from 'react-router-dom'



const Header = () => {
  const navigate=useNavigate();
  return (
    <header className='blog_header'>
      <div className='logo'>
         {/* എഴുത്തിടം */}
         Blog Logo
      </div>
      <ul className='blog_menu'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Posts</a></li>
        <li><a href='#'>Contact Us</a></li>
        <li><a onClick={()=> navigate("log-in")} href='#'>Log in</a></li>
      </ul>
    </header>
  )
}

export default Header