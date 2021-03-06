import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Core/Home'
import SignIn from './User/SignIn'
import SignUp from './User/SignUp'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={SignIn} />
                <Route path="/signup" exact component={SignUp} />
            </Switch>
        </BrowserRouter>
    )
}
