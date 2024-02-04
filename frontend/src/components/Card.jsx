import { Button, Card } from 'react-bootstrap'

const CardItem = (prop) => {
  console.log('props: ' + JSON.stringify(prop))
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{prop.name}</Card.Title>
        <Card.Text>{prop.description}</Card.Text>
        <Button variant='primary'>More</Button>
      </Card.Body>
    </Card>
  )
}

export default CardItem
