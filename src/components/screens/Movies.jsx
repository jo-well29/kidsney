import React from 'react'
import { NavLink } from 'react-router-dom'
import AddMovie from './AddMovie'

const Movies = () => {
    return (
        <>
            <h1>Movies</h1>
            <NavLink exact to="/addMovie" activeClassName="active">
                Add a Movie!
        </NavLink>
        </>

    )
}

export default Movies