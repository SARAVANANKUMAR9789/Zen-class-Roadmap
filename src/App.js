import Dashboard from "./com/Dashboard";
import AddUser from "./com/AddUser";
import Sidebar from "./com/Sidebar";
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import EditUser from "./com/EditUser";
import { useState } from "react";

function App() {
  let [users,setUsers] = useState([
    {
      name:'Office Task-1',
      Description:'This is the description for My Fist Task',
      Status:'Not Completed',
    },
    {
      name:'Office Task-2',
      Description:'This is the description for My Second Task',
      Status:'Not Completed',
    },
    {
      name:'Office Task-3',
      Description:'This is the description for My Third Task',
      Status:'Not Completed',
    }
  ])
  return <>
  <BrowserRouter>
    <div id="wrapper">
      <Sidebar/>  
      <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
       <Routes>
          <Route path='/dashboard' element={<Dashboard users={users} setUsers={setUsers}/>}/>
          <Route path='/add-user' element={<AddUser users={users} setUsers={setUsers}/>}/>
          <Route path='/edit-user/:id' element={<EditUser users={users} setUsers={setUsers}/>}/>
          <Route path='*' element={<Navigate to='/dashboard'/>}/>
       </Routes>
      </div>
      </div>
    </div>
  </BrowserRouter>
  </>
}

export default App;