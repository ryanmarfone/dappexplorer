import React, { Component } from 'react';
import { Container, Jumbotron, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import Navigation from './components/Navigation';

class App extends Component {

  state = {
    players: [
      {
        'name': 'Ryan',
        'id': 1
      },
      {
        'name': 'Stephen',
        'id': 2
      }
    ]
  }
  
  render() {
    return (
      <div>
        <Navigation />
        <Container fluid className="hero">
          <Container>
            <Row>
              <Col>
                <Jumbotron>
                  <h1>Welcome to your private internet</h1>
                  <p>Built on Ethereum</p>
                  <SearchForm />
                </Jumbotron>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container className="section">
          <Row>
            <Col>
              <h2>Discover Applications</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Img variant="top" src="https://picsum.photos/250/150" />
                <Card.Body>
                  <Card.Title>Crypto Kitties</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.</Card.Text>

                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="https://picsum.photos/250/150?grayscale?blur" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.</Card.Text>

                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="https://picsum.photos/250/150?blur" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.</Card.Text>

                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="https://picsum.photos/250/150?grayscale" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.</Card.Text>

                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Results players={this.state.players} />
      </div>
    )
  };
}

export default App;
