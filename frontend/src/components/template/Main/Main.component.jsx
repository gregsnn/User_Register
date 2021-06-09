import './Main.css'
import React from 'react'
import { Header } from '../../index'

const Main = props =>
    <React.Fragment>
        <Header {...props} />
        <main className="content">
            <div className="content__main">
                { props.children }
            </div>
        </main>
    </React.Fragment>

export { Main }