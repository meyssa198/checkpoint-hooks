import React from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from "react-player"

const Description = ({movie}) => {
    return (
        <div>
            {
                movie?
                <>
                <h2>{movie.title}</h2>
                <ReactPlayer  url={movie.trailer}/>
                <p>{movie.description}</p>
                </>
                :<p>No movie found.</p>

            }

            <Link to="/">
            <span style={{
                margin:"20px 0px 20px 0px",
                padding:'10px',
                color:"white",
                background:"blue",
            }}> Back to home page</span>
            </Link>
        </div>
    )
}

export default Description
