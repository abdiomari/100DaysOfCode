import React, { useState } from 'react'
import { Box, TextField, Typography } from '@mui/material'
import {
    ListItem,
    IconButton,
  } from "@mui/material";
  import SendIcon from '@mui/icons-material/Send';
 

const NewTodo = ({ addTodo }) => {

    const [ newTodo, setNewTodo ] = useState('')

    const handleInputChange = (event) => {
        setNewTodo(event.target.value);
    }

    const handleButtonClick = () => {
        addTodo(newTodo);
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