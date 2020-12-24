import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Pages from './Pages'

const Router = () => {
    return(
        <React.Suspense falback={<h4>Loading....</h4>}>
            <Switch>
                <Redirect from='*' to='/'/>
                <Route exact path='/' component={Pages.Home}/>
            </Switch>
        </React.Suspense>
    )
}
export default Router