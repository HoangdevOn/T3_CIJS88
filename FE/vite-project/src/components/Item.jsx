import { Card } from "react-bootstrap"


const Item = () => {
  return (
    <div className="itemb">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="tomato.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
  
}

export default Item