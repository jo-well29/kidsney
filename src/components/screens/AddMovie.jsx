import React from 'react'
import { api } from '../../services/mockApiConfig'
import './AddMovie.css'
import { NavLink } from 'react-router-dom'


export default class AddMovie extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            imageUrl: '',
            description: '',
            runTime: ''
        }
    }


    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })


    }

    onSubmit = async (e) => {
        e.preventDefault()
        e.target.reset()

        let post = await api.post('/', {
            title: this.state.title,
            imageUrl: this.state.imageUrl,
            description: this.state.description,
            runTime: this.state.runTime
        })
        .then(res => (res.status === 201 ? this.props.history.push('/movies') : null))

        this.setState({
            title: '',
            imageUrl: '',
            description: '',
            runTime: ''
        })

    }

    render() {
        console.log(this.state)
        return (
            <div className="addBody">
                <div className="top">
                    <h1>Add a new Movie</h1>
                </div>
                <div className="form-list">
                    <form onSubmit={this.onSubmit}>

                        <label>Movie Title</label>
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={(e) => this.onChange(e)} />


                        <label>Image Url</label>
                        <input
                            type="text"
                            value={this.state.imageUrl} name="imageUrl"
                            onChange={(e) => this.onChange(e)} />

                        <label>Description</label>
                        <input
                            type="text"
                            value={this.state.description}
                            name="description"
                            onChange={(e) => this.onChange(e)} />

                        <label>Run Time in Minutes</label>
                        <input
                            type="text"
                            value={this.state.runTime}
                            name="runTime"
                            onChange={(e) => this.onChange(e)} />

                        <input type="submit" value="Submit" className="submit-btn" />
                    </form>
                    <div className="path-text">
                        <h2>Go Back to</h2>
                    </div>
                    <div className="navLink">
                        <NavLink exact to='/movies' activeClassName="active">
                            Movies
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
