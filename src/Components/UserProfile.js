import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import '../Components/userprofile.css'
const UserProfile = () => {
    const {id} = useParams ()
    const [user, setUser]= useState({})
    useEffect(() => {
     axios.get (`https://jsonplaceholder.typicode.com/users/?id=${id}`)
        .then (res => setUser (res.data[0]))
        .catch (err => console.log (err));
    });
    
    return (
    <div className='profile' key={user.id}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2ykDDZFTVw9rgdv64vcYvzd08SVvgW5aZQ&usqp=CAU" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.username}</Card.Text>
        <Card.Text>{user.email}</Card.Text>
        <Card.Text>{user.phone}</Card.Text>
        <Card.Text>{user.website}</Card.Text>
        <Button variant="primary" > 
        <Link to={'/users'} className='btn2' >Go Back</Link>
        </Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default UserProfile