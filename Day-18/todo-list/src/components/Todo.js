import React from 'react'
import { useState } from 'react'
import { Box, Grid, Paper } from '@mui/material'
import { styled } from '@mui/system'
import TodoList from './TodoList'
import NewTodo from './newTodo'
import Typography from '@mui/material/Typography'


const Todo = () => {
    const [ todo, newTodo ] = useState('')
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h2" component="h2">
            Todo List
        </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} >
          <Item>
            <NewTodo />
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item>
            <TodoList />
          </Item>
        </Grid>
      </Grid>
    </Box>
    
    
    </>
  )
}

export default Todo