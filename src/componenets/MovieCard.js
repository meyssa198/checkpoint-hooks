import React from 'react'
import { Card } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';


const MovieCard = ({movie}) => {
console.log(movie)
    return (
        <div style={{
            display:"flex",
            flexDirection:"row", paddingRight:"50px"
        }}>
           <Card style={{ width: '18rem' }} className="cardStyle">
                <Card.Img variant="top" src={movie.posterURL} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                   {movie.description}
                    </Card.Text>
                    <Rating name="read-only" value={movie.rate} readOnly />
                </Card.Body>
            </Card> 
        </div>
    )
}

export default MovieCard
