import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link,useNavigate } from 'react-router-dom';

function Dashboard({users,setUsers}) {
  let navigate = useNavigate()

  let handleDelete = (i)=>{
    let newUsers = [...users]
    newUsers.splice(i,1)
    setUsers(newUsers)
  }
  console.log(users);
  return <>
     <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>
      </div>
      <div className='container-fluid'>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((e,i)=>{
            return <tr key={i}>
              <td>{i+1}</td>
              <td>{e.name}</td>
              <td>{e.Description}</td>
              <td>
                    <select className='forn-control' value={e.Status} onChange={(e)=>{
                      let userslists = [...users]
                        userslists[i].Status = e.target.value
                        setUsers(userslists)
                    }}>
                        {
                            ['Completed','Not Completed'].map((s,ind)=>{
                              return <option value={s} key={ind}>{s}</option>
                            })
                        }
                    </select>
              </td>
              <td>
                <Button variant='primary' onClick={()=>{navigate(`/edit-user/${i}`)}}>
                  Edit
                </Button>
                &nbsp;
                <Button variant='danger' onClick={()=>handleDelete(i)}>Delete</Button>
              </td>
            </tr>
          })
        }
      </tbody>
    </Table>
      </div>
  </>
}

export default Dashboard