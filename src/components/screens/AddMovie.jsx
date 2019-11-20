import React from 'react'
import { api } from '../../services/mockApiConfig'


export default class AddMovie extends React.Component {
    constructor() {
        super()
        this.state = {
            // movieTitle: ''
        }
    }


    onChange = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        this.setState({
            [e.target.name]:e.target.value
        })


    }

    onSubmit = async(e) => {
        e.preventDefault()
        let post = await api.post('/', {
            movieTitle:this.state.movieTitle,
            imageUrl:this.state.imageUrl,
            description:this.state.description,
            runTime:this.state.runTime
        })
        .then((res)=>{
            console.log(res)
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Add a new Movie!</h1>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        name="movieTitle" 
                        value={this.state.movieTitle}
                        onChange={(e) => this.onChange(e)} />
                    
                    <input 
                        type="text" 
                        value={this.state.imageUrl}name="imageUrl" 
                        onChange={(e) => this.onChange(e)} />

                    <input 
                        type="text" 
                        value={this.state.description} 
                        name="description" 
                        onChange={(e) => this.onChange(e)} />

                    <input 
                        type="text" 
                        value={this.state.runTime} 
                        name="runTime" 
                        onChange={(e) => this.onChange(e)} />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
