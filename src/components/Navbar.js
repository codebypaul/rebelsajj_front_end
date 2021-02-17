import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
const NavbarArea = (props) => {
    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="/">Rebels AJJ</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">

                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="/schedule">Schedule</Nav.Link>
                    {
                        props.isAuth 
                        ? <ul className="navbar-nav ml-auto">
                            <Nav.Link className="nav-item" href="/profile">
                                Profile
                            </Nav.Link>
                            <li className="nav-item">
                                <span onClick={props.handleLogout} className="nav-link logout-link">Logout</span>
                            </li>
                        </ul>
                        : <ul className="navbar-nav ml-auto">
                            <Nav.Link className="nav-item" href="/signup">
                                Create Account
                            </Nav.Link>
                            <Nav.Link className="nav-item" href="/login">
                                Login
                            </Nav.Link>
                        </ul>
                    }
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
        
    );
}

export default NavbarArea;