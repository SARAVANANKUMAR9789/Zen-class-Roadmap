import React, { useState } from 'react';
import UserForm from './com/UserForm';
import UserList from './com/UserList';

function App() {
  const [users, setUsers] = useState([]);
  return (
    <div>
      <h1>CRUD Operations with User Data</h1>
      <UserForm setUsers={(value)=>{setUsers([...users,value])}} />
      <UserList users={users} setUsers={(value)=>{setUsers([...value])}} />
    </div>
  );
}

export default App;
