import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ProductCardComponent = ({productObject}) => {
    const id = productObject.id;
    const title = productObject.title;
    const category = productObject.category;
    const description = productObject.description;
    const image = productObject.image;
    const price = productObject.price;
    const ratingRate = productObject.rating.rate;
    const ratingCount = productObject.rating.count;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img style={{padding:'1rem'}} variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{category.toUpperCase()}</Card.Subtitle>
        <Card.Text>
            {description}
        </Card.Text>
        <span style={{fontWeight:'bold', fontSize:'1.25rem'}}>$ {price}</span>
        <Button style={{float:'right'}} variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  )
}