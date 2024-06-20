import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({
            title,
            completed: false
        });
        setTitle('');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', mb: 2 }}>
            <TextField
                fullWidth
                variant="outlined"
                label="Add a new todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" sx={{ ml: 2 }}>
                Add
            </Button>
        </Box>
    );
};

export default TodoForm;
