import React from 'react'
import logo from './img/key.png'

const Header = () => {
  return (
    <>
      <div className="site_header">
        <div className='site_title'>
          <p>cryptx</p>
          <img src={logo} id="keyimage"></img>
        </div>
        <div id="header_links">
          <a href="login.html" id="login">Login</a>
          <a href="signup.html" id="signup">Sign up</a>
          <a href="about.html" id="about">About</a>
        </div>
      </div>
      <div id="header_margin"></div>
    </>

  )
}

export default Header

