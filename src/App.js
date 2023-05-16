
import './App.scss';
import Header from './components/header';
import TableUsers from './components/tableuser';
import Container from 'react-bootstrap/Container';
import ModalAddNew from './components/modalAddnew';
import { useState } from 'react';

function App() {

  const [isShowModalAddUsers, setisShowModalAddUsers] = useState(false);
  const handleClose = () =>{
    setisShowModalAddUsers(false);
  }
  return (
    <div className='app-container'>
      <Header></Header>
      <Container>

        <div className="my-3 d-flex justify-content-between">
          <span className=''><b>List Users</b></span>
          <button className='btn btn-success' 
            onClick={() => setisShowModalAddUsers(true)}
          > Add User</button>
        </div>
        
        <TableUsers></TableUsers>
      </Container>

      <ModalAddNew
        show={isShowModalAddUsers}
        handleClose={handleClose}
      />
    </div>
  );
}

export default App;
