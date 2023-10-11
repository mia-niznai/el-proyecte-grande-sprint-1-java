import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";

export default class NavbarComp extends Component {
    render() {
        return (
            <div>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">Skills Meter</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#aboutUs">About us</Nav.Link>
                                <Nav.Link href="#skills">Skills</Nav.Link>
                                <NavDropdown title="Games" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Tic-Tac-Toe</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Trivia</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Typing speed test</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">Snake</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.5">Hangman</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav className="ml-auto"> {/* Add ml-auto class here */}
                                <Button type="submit" className="mx-2">Sign In</Button> {/* Add mx-2 class for spacing */}
                                <Button type="submit" className="mx-2">Sign Up</Button> {/* Add mx-2 class for spacing */}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
