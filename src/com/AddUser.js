import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function AddUser({ users, setUsers }) {
    let [name, setName] = useState("")
    let [Description, setDescription] = useState("")
    let [Status, setStatus] = useState("")
    let navigate = useNavigate()

    let handleSave = () => {
        let newArray = [...users]
        newArray.push({
            name,
            Description,
            Status,
        })
        setUsers(newArray)
        navigate('/dashboard')
    }

    return <div className='container'>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Add User</h1>
        </div>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Description address</Form.Label>
                <Form.Control type="Description" placeholder="Enter Description" onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Control type="text" placeholder="Enter Status" onChange={(e) => setStatus(e.target.value)} />
            </Form.Group>

            <Button variant="primary" onClick={() => handleSave()}>
                Submit
            </Button>
        </Form>
    </div>
}

export default AddUser