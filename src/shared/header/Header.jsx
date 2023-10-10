import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/images/logo.png'


const Header = () => {
  return (
    <div className='wrapper'>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="menu">
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>

        </div>

    </div>
  )
}

export default Header