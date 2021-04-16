import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Image from '../Image/Image'
import avatarOne from '../../Components/Images/AvatarLogo3.png'
import './styles.css'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const [navbar, setNavbar] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <Image className="logo" src={avatarOne} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              {/* <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link> */}
            </li>
            <li className="nav-item">
              {/* <Link to="/work" className="nav-links" onClick={closeMobileMenu}>
                Work
              </Link> */}
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
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
