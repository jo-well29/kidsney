import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/screens/Home'
import Movies from '../components/screens/Movies'
import AddMovie from '../components/screens/AddMovie'
import MotD from '../components/screens/MotD'

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/movies' component={Movies} />
            <Route exact path='/addMovie' component={AddMovie} />
            <Route exact path='/motD' component={MotD} />
        </Switch>
    )
}