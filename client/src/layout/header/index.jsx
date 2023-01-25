import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./index.scss";

const Header = () => {
  return (
    <div id='header'>
<div className='navbar-img'>
  <div className='header-img'><div><Link to={"/"}><img src="https://preview.colorlib.com/theme/course/images/logo.png.webp"/></Link></div><div><Link><h1>COURSE</h1></Link></div></div>
<div className='navbar-page'>  
    <nav>
    <ul>
          <li><NavLink to={"/add"}>Add Course</NavLink></li>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/"}>ABOUT US</NavLink></li>
        <li><NavLink to={"/"}>COURSES</NavLink></li>
        <li><NavLink to={"/"}>ELEMENTS</NavLink></li>
        <li><NavLink to={"/"}>NEWS</NavLink></li>
        <li><NavLink to={"/"}>CONTACT</NavLink></li>
       
    </ul>
  </nav>
  </div>
  <div className='navbar-tel'>
    <div className='nav-icon'><i className="fa-solid fa-phone-volume"></i></div>
    <div><h2>+43 4566 7788 2457</h2></div>
  </div>
</div>
    </div>
  )
}

export default Header