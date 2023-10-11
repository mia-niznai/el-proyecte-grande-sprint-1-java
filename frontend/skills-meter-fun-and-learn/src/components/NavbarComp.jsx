import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import Temporary_Logo from "../images/Temporary_Logo.svg";

export default class NavbarComp extends Component {
    render() {
        const logoStyle = {
            marginRight: "15px",
        };

        return (
            <div>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Nav.Link to="/" style={logoStyle}>
                            <img height={85} className="logo" src={Temporary_Logo} alt="logo"/>
                        </Nav.Link>
                        <Navbar.Brand href="#home">Skills Meter</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Games" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Tic-Tac-Toe</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Trivia</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Typing speed test</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">Snake</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.5">Hangman</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Skills" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/4.1">Logical Thinking</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/4.2">Spatial Awareness</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/4.3">Problem Solving</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/4.4">Math Skills</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/4.5">English Skills</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/4.6">Fine Motor Skills</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/4.7">Strategic Planning</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/4.8">Collaboration</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/4.8">Creativity (imagination, artistic expression)</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/5.1">Memory</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/5.2">Communication</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/5.3">Attention and Concentration</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/5.4">Language and Reading</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/5.5">Time management</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/5.6">Persistence and Resilience</NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link href="#aboutUs">About us</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                                <Nav.Link href="#home">Home</Nav.Link>
                            </Nav>
                            <Nav className="ml-auto">
                                <Button type="submit" className="mx-2">Sign In</Button>
                                <Button type="submit" className="mx-2">Sign Up</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
