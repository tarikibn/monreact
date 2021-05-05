import React from 'react'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
function Navbar1 () 
{
    return(
        <div className="bg-light row mx-0">
           <div className="col-12 ">
           <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto offset-3">
      <Nav.Link className="px-5" href="/">Home</Nav.Link>
      <Nav.Link  className="px-5" href="/Api">Link</Nav.Link>
      <Nav.Link  className="px-5" href="/favorite">favorite</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>

           </div>
        </div>
    )
}
export default  Navbar1;