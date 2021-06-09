import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import { Home, UserCrud } from './components'

const Routes = props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />

        <Redirect from='*' to='/' />
    </Switch>

export { Routes }