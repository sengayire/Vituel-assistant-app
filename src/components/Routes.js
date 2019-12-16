import React from 'react'
import Home from './Home'
import Profile from './Profile'

import { Route, Switch, Redirect } from 'react-router-dom';
const Routes = () => (
<Switch>
    <Route  exact path="/" render={props => <Home {...props} />}/>
    <Route  exact path="/profile" render={props => <Profile {...props} />}/>
</Switch>
)

export default Routes