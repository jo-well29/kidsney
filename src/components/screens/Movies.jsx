import React from 'react'
import { NavLink } from 'react-router-dom'
import AddMovie from './AddMovie'
import './Movies.css'
import { api } from '../../services/mockApiConfig'

export default class Movies extends React.Component {
    constructor() {
        super()
        this.state = {
            movies: []

        }
    }

    componentDidMount() {
        this.fetchMovies()
        console.log(api)
    }
    fetchMovies = async () => {
        try {
            const movies = await api.get('/')
            console.log(movies)
            this.setState({ movies: movies.data })
        }
        catch (error) {
            console.error(error)
        }
    }

    render() {
        const movieData = this.state.movies.map((movie, index) => {
            return (
                <div key={index} className="movie-container">
                    <h1>{movie.title}</h1>
                    <img className="image-url" src={movie.imageUrl} />
                    <p>Run Time: {movie.runTime} minutes</p>
                    <h2>{movie.description}</h2>
                </div>

            )

        })
        return (
            <div className="movies">
                <h1>Movies</h1>
                <div className="movieAdd">
                    <NavLink exact to="/addMovie" activeClassName="active">
                        Add a Movie!
                    </NavLink>
                </div>
                <div className="moviePoster">
                        {movieData}
                </div>
                
            </div>

        )
    }
}

