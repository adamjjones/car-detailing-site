import React from 'react'

const Navbar = () => {
  return (
    // console.log("re-rendered")
    <section>
      <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="navbar hide-on-xsmall-and-down">
            <li><a href="sass.html">Home</a></li>
            <li><a href="badges.html">Pictures</a></li>
            <li><a href="collapsible.html">Pricing</a></li>
          </ul>
        </div>
      </nav>
    </section>
  )
}

export default Navbar
