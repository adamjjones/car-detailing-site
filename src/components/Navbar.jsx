import React, { Component } from 'react'
import Main from '../img/Main-logo.png'

const Navbar = () => {
  return (
    <div>
      <div>
        <img class="logo" src={Main} alt="" />
        <span className="greeting">So Fresh Hand Car Wash</span>
      </div>
      <nav>
        <div class="nav-wrapper">
          <ul id="nav-mobile" class="navbar hide-on-xsmall-and-down">
            <li><a href="sass.html">Home</a></li>
            <li><a href="badges.html">Pictures</a></li>
            <li><a href="collapsible.html">Pricing</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
