import React, { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import Navigation from './components/Navigation';

class App extends Component {

  render() {
    return (
      <div>
      <Navigation />
      <Container fluid>
        <Jumbotron>
          <h1>Search the decentralized internet</h1>
          <p>This is a simple search app</p>
          <SearchForm />
        </Jumbotron>
        {/*<Results />*/}
      </Container>
      </div>
    )
  };
}

export default App;
