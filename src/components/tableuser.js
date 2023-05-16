import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUsers } from '../services/usersevices';
import ReactPaginate from 'react-paginate';


const TableUsers = (props) => {

    const [listUsers, setlistUsers] = useState([]);
    const [totalUsers, settotalUsers] = useState(0);
    const [totalPages, settotalPages] = useState(0);

    useEffect(() => {
        //call api
        getUsers(1);
    }, [])

    const getUsers = async (page) =>{
      let res = await fetchAllUsers(page);
      console.log(">>> check new res ", res)
      if (res && res.data ){    
        console.log(res)
        settotalUsers(res.total)
        setlistUsers(res.data)
        settotalPages(res.total_pages)
      }
      console.log("check res", res)
    }

    const handlePageClick = (event) =>{
      console.log(event)
      getUsers(+event.selected + 1) //them dau cong o dau de convert string => number vi chua biet selected la string hay number

    }

  return (
    <>
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
        </tbody>
      </Table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </>
  );
}

export default TableUsers;