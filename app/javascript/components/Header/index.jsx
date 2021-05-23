import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <div className= 'container'>
      <nav className="navbar navbar-expand-md fixed-top navbar-light bg-light">
        <div className=" container collapse navbar-collapse" id="mainNavBar">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to='/blog' >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/info' >
                Info
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
