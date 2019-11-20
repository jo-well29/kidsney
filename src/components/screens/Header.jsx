import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <nav>
            <img className="logo" src="https://i.ibb.co/PQwm5Kc/kidsney-logo.png" />
            <div className="nav-bar">
                <NavLink exact to='/' activeClassName="active">
                        Home
                </NavLink>
                <NavLink exact to='/movies' activeClassName="active">
                        Movies
                </NavLink>
                <NavLink exact to="/MotD" activeClassName="active">
                        Movie of the Day
                </NavLink>
            </div>
        </nav>
    )
}

export default Header