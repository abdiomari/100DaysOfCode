import React, { useState } from 'react'
import { Box, TextField, Typography } from '@mui/material'
import {
    ListItem,
    IconButton,
  } from "@mui/material";
  import SendIcon from '@mui/icons-material/Send';
 

const NewTodo = () => {

    const [ newTodo, setNewTodo ] = useState('')
    const [ todos, setTodos ] = useState([]);

    const handleInputChange = (event) => {
        setNewTodo(event.target.value);
    }

    const handleButtonClick = () => {
        const todoObject = {
            id: todos.length,
            text: newTodo,
            completed: false
        };
        setTodos([...todos, todoObject]);
        setNewTodo('');
    };

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '80%' },
            }}
            noValidate
            autoComplete="off"
            
        >
            <Typography variant="h6" component="h2">
                Add a new activity
            </Typography>
            <ListItem
            secondaryAction={
                <>
                <IconButton aria-label="Submit" onClick={ handleButtonClick }>
                  <SendIcon />
                  </IconButton>
                </>
              }
            >
                <TextField 
                id="standard-basic"
                label="New Todo" 
                variant="standard" 
                value={newTodo}
                onChange={handleInputChange}
                />
            </ListItem>
        </Box>
    )
}

export default NewTodo