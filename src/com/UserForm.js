import React, { useState } from 'react';
import { API_URL } from './Global';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function UserForm({ setUsers = () => { } }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addUser = async () => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to add user');
      }

      const newUser = await response.json();
      setUsers(newUser)
      setFormData({ name: '', email: '', phone: '' });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div onSubmit={(e) => { e.preventDefault(); addUser(); }}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="Name" variant="standard" type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        <TextField id="standard-basic" label="Email" variant="standard" type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        <TextField id="standard-basic" label="Phone" variant="standard" type="text" name="phone" value={formData.phone} onChange={handleInputChange} required />
        <Button variant="outlined" type="submit">Add User</Button>
      </Box>
    </div>
  );
}

export default UserForm;
