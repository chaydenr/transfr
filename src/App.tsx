import logo from './logo.svg';
import './App.css';
import SpotifyButton from './components/SpotifyLogin/SpotifyButton';

// bootstrap easy templating
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card, Form } from 'react-bootstrap';
import GetSongs from './components/SpotifyGetLibrary/GetSongs';

function App() {

  return (
    <div className="App">
      <Container>
        <SpotifyButton />
        <GetSongs />
      </Container>
    </div>
  );
}

export default App;
