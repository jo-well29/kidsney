import React from 'react'
import './Home.css'
import { Button } from '../shared/Button'

const Home = (props) => {
    const {history}  = props
    return (
        <div className="homeScreen">
            <img src="https://cdn.dribbble.com/users/146798/screenshots/6131438/movie-dribbble_4x.jpg" alt="" />
            <Button
                title='View Movies'
                onClick={() => history.push('/movies')} />
        </div>
    )
}

export default Home