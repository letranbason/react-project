import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUsers } from '../services/usersevices';

const TableUsers = (props) => {

    const [listUsers, setlistUsers] = useState([]);

    useEffect(() => {
        //call api
        getUsers();
    }, [])

    const getUsers = async () =>{
      let res = await fetchAllUsers();

      if (res && res.data && res.data.data){    
        setlistUsers(res.data.data)
      }
      console.log("check res", res)
    }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {listUsers && listUsers.length > 0 &&
          listUsers.map((item,index) =>{
            return( 
              /*key giup hieu nang cao hon khi sort lai phan tu*/
              <tr key={`users-${index}`}>  
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
              </tr>
            );
          })
        }
        
        {/* <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </Table>
  );
}

export default TableUsers;