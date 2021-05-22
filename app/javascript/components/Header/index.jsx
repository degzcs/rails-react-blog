import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <div className= 'container'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavBar" aria-controls="mainNavBar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNavBar">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to='/' >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/blog' >
                Blog
              </Link>
            </li>
          </ul>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0 justify-content-end">
            <li className="nav-item">
              <Link className="nav-link" to='/login' >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
