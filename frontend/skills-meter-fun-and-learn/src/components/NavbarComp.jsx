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
                            <img height={100} className="logo" src={Temporary_Logo} alt="logo"/>
                        </Nav.Link>
                        <Navbar.Brand href="#home">Skills Meter</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Games" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/games/tictactoe">Tic-Tac-Toe</NavDropdown.Item>
                                    <NavDropdown.Item href="/games/trivia">Trivia</NavDropdown.Item>
                                    <NavDropdown.Item href="/games/typingspeedtest">Typing speed test</NavDropdown.Item>
                                    <NavDropdown.Item href="/games/snake">Snake</NavDropdown.Item>
                                    <NavDropdown.Item href="/games/hangman">Hangman</NavDropdown.Item>
                                    <NavDropdown.Item href="/games/2048">2048</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Skills" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/skills/logicalthinking">Logical Thinking</NavDropdown.Item>
                                    <NavDropdown.Item href="/skills/spatialawareness">Spatial Awareness</NavDropdown.Item>
                                    <NavDropdown.Item href="/skills/problemsolving">Problem Solving</NavDropdown.Item>
                                    <NavDropdown.Item href="/skills/mathskills">Math Skills</NavDropdown.Item>
                                    <NavDropdown.Item href="/skills/englishskills">English Skills</NavDropdown.Item>
                                    <NavDropdown.Item href="/skills/finemotorskills">Fine Motor Skills</NavDropdown.Item>
                                    <NavDropdown.Item href="/skills/strategicplanning">Strategic Planning</NavDropdown.Item>
                                    <NavDropdown.Item href="/skills/collaboration">Collaboration</NavDropdown.Item>
                                    <NavDropdown.Item href="/skills/creativity">Creativity (imagination, artistic expression)</NavDropdown.Item>
                                    <NavDropdown.Item href="/skills/memory">Memory</NavDropdown.Item>
                                    <NavDropdown.Item href="/skills/communication">Communication</NavDropdown.Item>
                                    <NavDropdown.Item href="/skills/attentionandconcentration">Attention and Concentration</NavDropdown.Item>
                                    <NavDropdown.Item href="/skills/languageandreading">Language and Reading</NavDropdown.Item>
                                    <NavDropdown.Item href="#/skills/timemanagement">Time management</NavDropdown.Item>
                                    <NavDropdown.Item href="#/skills/persistenceandresilience">Persistence and Resilience</NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link href="/aboutUs">About us</Nav.Link>
                                <Nav.Link href="#/contact">Contact</Nav.Link>
                                <Nav.Link href="/homepage">Home</Nav.Link>
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
