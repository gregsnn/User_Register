import './Logo.css'
import logo from '../../../assets/img/logo.png'
import React from 'react'

import { Link } from 'react-router-dom'

const Logo = props => 
    <aside className="logo">
        <Link to="/">
            <img src={logo} alt="logo" />
        </Link>
    </aside>

export { Logo }