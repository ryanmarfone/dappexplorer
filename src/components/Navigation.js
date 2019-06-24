import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Consumer} from '../context';

class Navigation extends React.Component {

    render() {
        return (
            <Consumer>
                {context => {
                    return (
                        <Navbar bg="primary" variant="dark" >
                            <Navbar.Brand href="#home">Decentralized</Navbar.Brand>
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Apps</Nav.Link>
                                <Nav.Link href="#home">{context.username}</Nav.Link>
                            </Nav>
                        </Navbar>
                    );
                }}
            </Consumer>
        );
    }
}

export default Navigation;