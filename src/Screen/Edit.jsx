import { Button, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [editData, setEditData] = useState({
        name: '',
        username: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`)
            .then((res) => setEditData(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/users/${id}`, editData)
            .then(() => {
                alert("Data updated successfully");
                navigate("/");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Paper elevation={24} sx={{ margin: 20, padding: 5 }}>
                    <Typography variant='h4' sx={{ marginBottom: 10 }}>
                        Edit User
                    </Typography>
                    <TextField
                        value={editData.name}
                        name='name'
                        onChange={(e) => setEditData(prevState => ({ ...prevState, name: e.target.value }))}
                        fullWidth
                        sx={{ mb: 5, mt: 3 }}
                    />
                    <TextField
                        value={editData.username}
                        name='username'
                        onChange={(e) => setEditData(prevState => ({ ...prevState, username: e.target.value }))}
                        fullWidth
                        sx={{ mb: 5 }}
                    />
                    <TextField
                        value={editData.email}
                        name='email'
                        onChange={(e) => setEditData(prevState => ({ ...prevState, email: e.target.value }))}
                        fullWidth
                        sx={{ mb: 5 }}
                    />
                    <TextField
                        value={editData.phone}
                        name='phone'
                        onChange={(e) => setEditData(prevState => ({ ...prevState, phone: e.target.value }))}
                        fullWidth
                        sx={{ mb: 5 }}
                    />
                    <Button variant='contained' type='submit'>
                        Update
                    </Button>
                </Paper>
            </form>
        </div>
    );
};

export default Edit;
