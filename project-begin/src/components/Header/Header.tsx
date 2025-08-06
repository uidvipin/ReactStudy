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
        <li><a onClick={()=> navigate("/")} href='#'>Home</a></li>
        <li><a onClick={()=> navigate("posts")} href='#'>Posts</a></li>
        <li><a onClick={()=> navigate("categories")} href='#'>Categories</a></li>
        <li><a onClick={()=> navigate("log-in")} href='#'>Log in</a></li>
        <li><a onClick={()=> navigate("/register")} href='#'>Register</a></li>
      </ul>
    </header>
  )
}

export default Header