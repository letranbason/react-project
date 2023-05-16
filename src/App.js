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

        <div className="my-3 d-flex justify-content-between'">
          <span className=''>Users List:</span>
          <button className='btn btn-success'> Add User</button>
        </div>
        
        <TableUsers></TableUsers>
      </Container>
    </div>
  );
}

export default App;
