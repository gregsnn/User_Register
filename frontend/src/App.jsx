import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './assets/styles/_App.scss'

import React from 'react'
import { HashRouter } from 'react-router-dom'

import { Routes } from './Routes' // or BrowserRouter
import { Logo, Nav, Footer } from './components'

const App = props =>
  <HashRouter>
    <div className="App">
      <Logo />
      <Nav />
      <Routes />
      <Footer />
    </div>
  </HashRouter>


export default App