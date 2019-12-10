import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
const Routes = () => (
<Switch>
    <Route  exact path="/" render={props => <Home {...props} />}/>
</Switch>
)

export default Routes