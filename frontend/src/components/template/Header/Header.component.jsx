import  './Header.css'
import React from 'react'

const Header = props => 
    <header className="header">
        <h1>
            <i className={`icon fa fa-${props.icon}`}></i>
            {props.title}
        </h1>
        <p>
            {props.subtitle}
        </p>
    </header>

export { Header }