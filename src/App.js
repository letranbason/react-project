import { Row } from 'react-bootstrap';
import './App.scss';
import Header from './components/header';
import TableUsers from './components/tableuser';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className='app-container'>
      <Header></Header>
      <Container>
        <TableUsers></TableUsers>
      </Container>
    </div>
  );
}

export default App;
