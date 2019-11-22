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
            moviesToDelete: '',
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
        api.delete(`/${this.state.moviesToDelete}`)
            .then(() => {
                const allMovies = this.state.movies
                allMovies.splice(this.state.moviesToDelete.index, 1)
                this.setState({
                    movies: allMovies
                })
            }).then(() => this.handleCloseModal())
            .then(()=>{
                this.fetchMovies()
            })
            .catch(err => console.error(err))
    }


    handleOpenModal = (id) => {
        this.setState({
            toDelete: true,
            moviesToDelete: id
        })

    }


    handleCloseModal = () => this.setState({ toDelete: false, moviesToDelete: {} })



    render() {

        let renderDeleteConfirmModal = 
        this.state.toDelete &&
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




        console.log(this.state)
        const movieData = this.state.movies.map((movie, index) => {
            return (
                <div key={index} className="movie-container">

                    <Button
                        title="X"
                        className="delete"
                        onClick={()=> this.handleOpenModal(movie.id)}
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
                <div className="modal">
                {renderDeleteConfirmModal}
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

