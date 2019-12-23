import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {Navbar, Nav} from 'react-bootstrap'
import '../../assets/styles/header.scss'
import logo from '../../assets/images/eros-logo.svg'
const Header = () => {
  return(
    <div>
    <Navbar bg="dark" variant="dark" className="border-bottom border-warning nav">
    <Navbar.Brand href="" className="brand" ><Link to='/'><h3 style={{color: '#eebd22'}}>AdamAndEvil.com</h3></Link></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="" className="menu" >ESCORTS</Nav.Link>
      <Nav.Link href="" className="menu" >TRANS</Nav.Link>
      <Nav.Link href="" className="menu">BDSM</Nav.Link>
      <Nav.Link href="" className="menu">TANTRA</Nav.Link>
      <Nav.Link href="" className="menu">MASSAGE</Nav.Link>
      <Nav.Link href="" className="menu">FETISH</Nav.Link>
      <Nav.Link href="" className="menu">DANCERS</Nav.Link>
      <Nav.Link href="" className="menu">SUGAR DATE</Nav.Link>
      <Nav.Link href="" className="menu">LIVE ESCORTS</Nav.Link>
    <Nav.Link href="" className="menu">SEARCH<span><FontAwesomeIcon icon={faSearch} style={{paddingLeft: 4}} /></span></Nav.Link>
    <span style={{ paddingTop: 9}}>{" "} | {" "}</span>
    <Nav.Link href="" className="menu" style={{color: '#eebd22'}}>POST AD</Nav.Link>
    </Nav>
  </Navbar>
    </div>
  )
}
    

export default Header;