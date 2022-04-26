import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../imagenes/logo.png'


const Nav = () => {
  return (
    <>
    <nav className="navbar navbar-light">
  <div className="container">
    <Link className="navbar-brand" to="/">
      <img src={logo} alt="logo" width="200" height="160"/>
      {/* <h1>holii</h1> */}
    </Link>
  </div>
</nav>
</>
  )
}

export default Nav
