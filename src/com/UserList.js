import React, { useState, useEffect } from 'react';
import { API_URL } from './Global';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

function UserList({users = [],setUsers = ()=> {}}) {

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data); 
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, [setUsers]);

  

  const deleteUser = async (id) => {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        const filteredUsers = users.filter(user => user.id !== id);
        setUsers(filteredUsers); 
    } catch (error) {
        console.error('Error deleting user:', error);
    }
};

  const editUser = async (id, updatedData) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });
        if (!response.ok) {
            throw new Error('Failed to edit user');
        }
        const updatedUsers = users.map(user => (user.id === id ? { ...user, ...updatedData } : user));
        setUsers(updatedUsers);
    } catch (error) {
        console.error('Error editing user:', error);
    }
};

  return (
    <ul>
      {users.map(user => (
        <UserItem key={user.id} user={user} onDelete={deleteUser} onEdit={editUser} />
      ))}
    </ul>
  );
}

function UserItem({ user, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = () => {
    onEdit(user.id, formData);
    setIsEditing(false);
  };

  return (
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
        {isEditing ? (
          <div>
            <TextField size="small" id="outlined-basic" label="Name" variant="outlined" type="text" name="name" value={formData.name} onChange={handleInputChange} />
            <TextField size="small" id="outlined-basic" label="email@gmail.com" variant="outlined" type="email" name="email" value={formData.email} onChange={handleInputChange} />
            <TextField size="small" id="outlined-basic" label="Phone" variant="outlined" type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
            <Button variant="contained" onClick={handleEditSubmit}>Save</Button>
          </div>
        ) : (
          <div>
            <CardContent>
              <Typography variant="h5" component="div">{user.name}</Typography>
              <Typography variant="h5" component="div">{user.email}</Typography>
              <Typography variant="h5" component="div">{user.phone}</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" onClick={() => onDelete(user.id)}>Delete</Button>
              <Button variant="contained" onClick={() => setIsEditing(true)}>Edit</Button>
            </CardActions>
          </div>
        )}
        </Card>   
      </Box>
  );
}

export default UserList;
