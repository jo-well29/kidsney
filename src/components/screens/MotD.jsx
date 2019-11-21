import React from 'react'
import axios from 'axios'
import './MotD.css'

const baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=0866d1ffb12f508f1c32f3edbf9e47ee&language=en-US&region=US&sort_by=popularity.desc&certification_country=US&certification.lte=PG&include_adult=false&include_video=false&page=1`

const image_url = `https://image.tmdb.org/t/p/w500`


export default class MotD extends React.Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            random: 0
        }
    }

    componentDidMount() {
        this.fetchApi()
    }

    fetchApi = async () => {
        try {
            const thirdParty = await axios.get((baseUrl))
            console.log(thirdParty.data)
            this.setState({
                movies: thirdParty.data.results
            })

        } catch (error) {
            console.error(error)
        }
    }



    render() {
        let random = Math.floor(Math.random() * Math.floor(this.state.movies.length));
        console.log("random:", random)

        console.log(this.state.movies)
        const randObj = this.state.movies && this.state.movies[random]
        console.log(randObj && randObj.title)





        return (
            <div>
                <h1>Movie of the Day</h1>
                <div className="rand-container">
                    <h1>{randObj && randObj.title}</h1>
                    <img src={randObj && image_url + randObj.poster_path} />
                    {<p>{randObj && randObj.overview}</p>}
                </div>
            </div>

        )
    }

}

