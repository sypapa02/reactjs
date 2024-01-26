import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <>
      <div className="App">
        {/* Barre de navigation */}
        <Navbar bg="light" expand="lg">
          <a href='/'>
            <img src='./assets/img/react.gif' alt='' width="90" height="100" />
          </a>
          <Navbar.Brand href="#home">CHEIKH BAMBA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Accueil</Nav.Link>
              <Nav.Link href="#link">Lien</Nav.Link>
              <Nav.Link href="#about">À propos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Titre */}
        <h1 className="mt-4 mb-4">MAHABATOU CHEIKH BAMBA</h1>

        {/* Trois cartes alignées horizontalement */}
        <div className="d-flex justify-content-between">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./assets/img/a.jpg" />
            <Card.Body>
              <Card.Title>kuruss</Card.Title>
              <Card.Text>njalabane.</Card.Text>
              <Button variant="primary">Commandez</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./assets/img/b.jpg" />
            <Card.Body>
              <Card.Title>kuruss</Card.Title>
              <Card.Text>baxline</Card.Text>
              <Button variant="primary">Commandez</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./assets/img/c.jpg" />
            <Card.Body>
              <Card.Title>kuruss</Card.Title>
              <Card.Text>petaw.</Card.Text>
              <Button variant="primary">Commandez</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;