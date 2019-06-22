import React from 'react';
import { Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

class Results extends React.Component {
    render() {
        return (
            <Container fluid>
            
                    <h2>Results List</h2>
  
                    <ListGroup>
                        <ListGroupItem href="#">Link 1</ListGroupItem>
                        <ListGroupItem href="#">Link 2</ListGroupItem>
                        <ListGroupItem href="#">Link 3</ListGroupItem>
                    </ListGroup>
    
            </Container >
        );
    }
}

export default Results;