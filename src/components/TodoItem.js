import React from 'react';
import { ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
    const handleComplete = () => {
        updateTodo({ ...todo, completed: !todo.completed });
    };

    const handleDelete = () => {
        deleteTodo(todo._id);
    };

    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
            }
        >
            <Checkbox
                checked={todo.completed}
                onChange={handleComplete}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <ListItemText primary={todo.title} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} />
        </ListItem>
    );
};

export default TodoItem;
