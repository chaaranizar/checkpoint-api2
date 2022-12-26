import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Navbars = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">UsersApp</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            {/*<Nav.Link href="#pricing">Pricing</Nav.Link>*/}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbars