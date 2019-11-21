import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

class Header extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    handleNav = (e) => {
        console.log(e.target.innerText)
        this.setState({
            clickedHome: '',
            clickedMovies: '',
            clickedMotD: ''
        })
        e.target.innerText === 'Home' &&
            this.setState({
                clickedHome: true,
            })
        e.target.innerText === 'Movies' &&
            this.setState({
                clickedMovies: true,
            })
        e.target.innerText === 'Movie of the Day' &&
            this.setState({
                clickedMotD: true,
            })

    }


    render() {
        const navHome = this.state.clickedHome ? 'blue' : null
        const navMovies = this.state.clickedMovies ? 'blue' : null
        const navMotD = this.state.clickedMotD ? 'blue' : null
        return (
            <nav>
                <img className="logo" src="https://i.ibb.co/PQwm5Kc/kidsney-logo.png" />
                <div className="nav-bar" onClick={this.handleNav}>
                    <NavLink exact to='/' activeClassName="active" className={navHome}>
                        Home
                        </NavLink>
                    <NavLink exact to='/movies' activeClassName="active"
                        className={navMovies}>
                        Movies
                        </NavLink>
                    <NavLink exact to="/MotD" activeClassName="active"
                        className={navMotD}>
                        Movie of the Day
                        </NavLink>
                </div>
            </nav>
        )
    }
}

export default Header

