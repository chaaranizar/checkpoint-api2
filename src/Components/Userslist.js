import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Userscard from './Userscard'
import '../Components/userslist.css'

const Userslist = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
            .then (res => setUsers(res.data))
            .catch (err => console.log (err))
      },[])
    

  return (
    <div className='list'>
        {users.map ((el) => <Userscard user = {el} key = {el.id}/>)}
    </div>
  )
}

export default Userslist