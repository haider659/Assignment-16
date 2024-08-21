import { Button, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate()
    const [name, setName] = useState({
        name: "",
        username: "",
        email: "",
        phone: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/users', name)
            .then((res) => alert("Data entered successfully" ,navigate("/")))
            .catch((err) => console.log(err));
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <Paper elevation={24} sx={{ margin: 20, padding: 5 }}>
                <Typography variant='h4' sx={{ marginBottom: 10 }}>
                    Create User
                </Typography>
                <TextField
                    onChange={(e) => setName(prevState => ({ ...prevState, name: e.target.value }))}
                    fullWidth
                    sx={{ mb: 5, mt: 3 }}
                    label="Name"
                />
                <TextField
                    onChange={(e) => setName(prevState => ({ ...prevState, username: e.target.value }))}
                    fullWidth
                    sx={{ mb: 5 }}
                    label="Username"
                />
                <TextField
                    onChange={(e) => setName(prevState => ({ ...prevState, email: e.target.value }))}
                    fullWidth
                    sx={{ mb: 5 }}
                    label="Email"
                />
                <TextField
                    onChange={(e) => setName(prevState => ({ ...prevState, phone: e.target.value }))}
                    fullWidth
                    sx={{ mb: 5 }}
                    label="Phone"
                />
                <Button variant='contained' type='submit'>
                    Create
                </Button>
            </Paper>
        </form>
    );
};

export default Create;
