import React from 'react'
import { NavLink } from 'react-router-dom'
import AddMovie from './AddMovie'
import './Movies.css'
import { api } from '../../services/mockApiConfig'
import { Button } from '../shared/Button'

export default class Movies extends React.Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            moviesToDelete: {},
            toDelete: false

        }
    }

    componentDidMount() {
        this.fetchMovies()
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

    handleDeleteMovies = () => {
        api.delete(`/movies${this.state.moviesToDelete.id}`)
            .then(() => {
                const allMovies = this.state.movies
                allMovies.splice(this.state.moviesToDelete.index, 1)
                this.setState({
                    movies: allMovies
                })
            }).then(() => this.handleCloseModal())
            .catch(err => console.error(err))
    }


    handleOpenModal = (movies, index) =>
        this.setState({ toDelete: true, moviesToDelete: { ...movies, index } })


    handleCloseModal = () => this.setState({ toDelete: false, moviesToDelete: {} })

    renderDeleteConfirmModal = () => {
        if (this.state.toDelete) {
            return (
                <div className="modal open">
                    <h4>
                        Are you Sure you want to delete {this.state.moviesToDelete.title}?
                    </h4>
                    <div className="buttons">
                        <Button
                            color="danger"
                            title="Yes"
                            onClick={this.handleDeleteMovies}
                        />
                        <Button
                            color="primary"
                            title="Cancel"
                            onClick={this.handleCloseModal}
                        />
                    </div>
                </div>
            )
        } else {
            return <div className="modal close" />
        }
    }

    render() {
        const movieData = this.state.movies.map((movie, index) => {
            return (
                <div key={index} className="movie-container">
                    <Button 
                        title="X"
                        className="delete"
                        onClick={() => this.handleOpenModal(movie, index)}
                        />
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
                    <div className="btn-style">
                        <NavLink exact to="/addMovie" activeClassName="active">
                            Add a Movie!
                        </NavLink>
                    </div>
                </div>
                <div className="moviePoster">
                    {movieData}
                </div>
                <div className="modal">{this.renderDeleteConfirmModal}
                </div>

            </div>

        )
    }
}

