import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Image from '../Image/Image'
import avatarOne from '../../Components/Images/AvatarLogo3.png'
import './styles.scss'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const [navbarText, setNavbarText] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  const changeText = () => {
    if (window.scrollY >= 20) {
      setNavbarText(true)
    } else {
      setNavbarText(false)
    }
  }

  window.addEventListener('scroll', changeText)

  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <Image className="logo" src={avatarOne} />
          </Link>
          <ul className="nav-menu">
            <li className={navbarText ? 'navbarText active' : 'navbarText'}>
              <Link to="/" className="nav-links">
                Return Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
