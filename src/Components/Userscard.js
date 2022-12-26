import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../Components/userscard.css'
const Userscard = ({user}) => {
  return (
    <div className='card'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2ykDDZFTVw9rgdv64vcYvzd08SVvgW5aZQ&usqp=CAU" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.username}</Card.Text>
        <Card.Text>{user.phone}</Card.Text>
        <Card.Text>{user.email}</Card.Text>
        <Button variant="primary"><Link className='btn' to={`/user/${user.id}`}>Check My Profile</Link></Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Userscard