import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import '../../assets/styles/header.scss'
import logo from '../../assets/images/eros-logo.svg'
const Header = () => (
    <div>
    <Navbar bg="dark" variant="dark" className="border-bottom border-warning nav">
    <Navbar.Brand href="#home" className="brand" ><img className="logo" src={logo} alt=""/></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#escorts" className="menu" >ESCORTS</Nav.Link>
      <Nav.Link href="#trans" className="menu" >TRANS</Nav.Link>
      <Nav.Link href="#bsdm" className="menu">BDSM</Nav.Link>
      <Nav.Link href="#tantra" className="menu">TANTRA</Nav.Link>
      <Nav.Link href="#massage" className="menu">MASSAGE</Nav.Link>
      <Nav.Link href="#fetish" className="menu">FETISH</Nav.Link>
      <Nav.Link href="#dancer" className="menu">DANCERS</Nav.Link>
      <Nav.Link href="#sugarDate" className="menu">SUGAR DATE</Nav.Link>
      <Nav.Link href="#liveEscorts" className="menu">LIVE ESCORTS</Nav.Link>
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
  </Navbar>
    </div>
)

export default Header;