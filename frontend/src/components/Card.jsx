import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const CardItem = (prop) => {
  console.log('props: ' + JSON.stringify(prop))

  const navigate = useNavigate()

  const onClickHandler = () => {
    navigate(`/product/${prop._id}`)
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{prop.name}</Card.Title>
        <Card.Text>{prop.description}</Card.Text>
        <Button variant='primary' onClick={onClickHandler}>
          More
        </Button>
      </Card.Body>
    </Card>
  )
}

export default CardItem
