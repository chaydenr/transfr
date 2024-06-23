import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const CLIENT_ID = "d57d55d1b4e14b84a557d9ac73a71e2f";
const CLIENT_SECRET = "7e7aa42cc5ec4befb345f1ffa7cfe6d8";

// user login consts
const SPOTIFY_AUTH_ENDPOINT = "https://"

function App() {
  const [ searchInput, setSearchInput ] = useState("");
  const [ accessToken, setAccessToken ] = useState("");

  useEffect(() => {
    // API Access Token
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
      fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token)) // gets a user token
      .then(console.log(accessToken))
  }, [])

  return (
    <div className="App">
      <Container>
        <InputGroup className="mb-3" size="">
          <FormControl
            placeholder='Search For Artist'
            type='input'
            onKeyPress={event => {
              if (event.key == "Enter") {
                console.log("Pressed Enter")
              }
              // console.log("Pressed " + event.key)
            }}
            onChange={event => setSearchInput(event.target.value)}
          />
          <Button onClick={event => {console.log("Clicked")}}>
            Search
          </Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className='mx-2 row row-cols-4'>
          <Card>
            <Card.Img src='#' />
            <Card.Body>
              <Card.Title>Item name here</Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default App;
