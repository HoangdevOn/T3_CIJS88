import { useState } from 'react';
import { Button,  Form, Image, InputGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  const [search,setSearch]=useState("")

  const handleSearch=(e)=>{
    setSearch(e)
    console.log(search)
  }

  // const Search=()=>{
    
  // }

  return (  
    <Navbar variant="dark" bg="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand hrWef="#home"><Image className='logo' src='logo.png'/></Navbar.Brand>
      <Navbar.Toggle  />
      <Navbar.Collapse>
        <Nav>
          <NavDropdown
            title="Cattergory"
            menuVariant="dark"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action  
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>

          </NavDropdown>

          <Form className='flex' inline>
            <InputGroup>
              <Form.Control 
              placeholder="Search..."
              onChange={(e)=>handleSearch(e.target.value)}
              />
            </InputGroup>
            
            <Button variant='dark' className='button' type="submit">Submit</Button>
            
          </Form>
          
          <Form  className='loginform'>
            <Button variant="dark" className='button' >log-in</Button>
            <Button variant="dark" className='button' >giohang</Button>
          </Form>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header

