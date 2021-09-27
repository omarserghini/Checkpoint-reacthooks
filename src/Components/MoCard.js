import {Card,Button} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";


function MoCard({film}) {
    return (
        <div>
<Card style={{ width: '300px', height:'450px'}}>
  <Card.Img   style={{ height:'380px'}} variant="top" src={film.url}   />
  <Card.Body>
    <Card.Title>{film.titre}</Card.Title>
    <Card.Text>
{film.bio}    </Card.Text>
  </Card.Body>
  <ReactStars
    count={5}
    size={24}
    edit={false}
    value={film.rate}
    activeColor="#ffd700"
  />

<Button variant="dark">Trailer</Button>{' '}


</Card>
            
        </div>
    )
}

export default MoCard;