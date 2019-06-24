import React from 'react';
import { Container, ListGroup, ListGroupItem, Row, Button } from 'react-bootstrap';
import axios from 'axios';

class Results extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {

        this.setState({
            items: this.props.players
        });


    }

    handleClick = (event) => {
        event.preventDefault(this);
        this.setState(state => {
            const list = state.items.push({
                "name": "Ryan",
                id: state.items.length + 1
            });

            return {
                list,
                value: '',
            };
        });

    }

    render() {
        return (
            <Container className="section">
                <h2>Digital Assets</h2>
                <Button variant="primary" onClick={this.handleClick}>Add Item</Button>
                <hr></hr>
                <ListGroup>
                    {this.state.items.map((item) =>
                        <ListGroup.Item key={item.id.toString()}>{item.name}</ListGroup.Item>
                    )}
                </ListGroup>
            </Container >
        );
    }
}

export default Results;