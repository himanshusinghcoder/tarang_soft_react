import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Paper } from '@mui/material';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { BASE_URL } from './constant';

const App = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await axios.get(`${BASE_URL}/todos`);
            setTodos(response.data);
        };
        fetchTodos();
    }, []);

    const addTodo = async (todo) => {
        const response = await axios.post(`${BASE_URL}/todos`, todo);
        setTodos([...todos, response.data]);
    };

    const updateTodo = async (todo) => {
        const response = await axios.put(`${BASE_URL}/todos/${todo._id}`, todo);
        setTodos(todos.map((t) => (t._id === todo._id ? response.data : t)));
    };

    const deleteTodo = async (id) => {
        await axios.delete(`${BASE_URL}/todos/${id}`);
        setTodos(todos.filter((t) => t._id !== id));
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h3" align="center" gutterBottom>
                Todo App
            </Typography>
            <Paper style={{ padding: 16 }}>
                <TodoForm addTodo={addTodo} />
                <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
            </Paper>
        </Container>
    );
};

export default App;
