import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';


class Navigation extends React.Component {

    render() {
        return (
            <Navbar bg="primary" variant="dark" >

                <Navbar.Brand href="#home">Decentralized</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Apps</Nav.Link>
                </Nav>

            </Navbar>
        );
    }
}

export default Navigation;