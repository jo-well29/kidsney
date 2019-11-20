import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <nav>
            <h1>Kidsney -</h1>
            <div className="nav-bar">
                <NavLink exact to='/' activeClassName="active">
                        Home
                </NavLink>
                    <NavLink exact to='/movies' activeClassName="active">
                        Movies
                </NavLink>
                    <NavLink exact to="/MotD" activeClassName="active">
                        Movies of the Day
                </NavLink>
            </div>
        </nav>
    )
}

export default Header