import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Grid, Paper } from '@mui/material'
import { styled } from '@mui/system'
import TodoList from './TodoList'
import NewTodo from './newTodo'
import Typography from '@mui/material/Typography'


const Todo = () => {
  // const [ todo, newTodo ] = useState('')
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    const todoObject = {
      id: todos.length,
      text: newTodo,
      completed: false
    };
    setTodos([...todos, todoObject]);
  }

  const deleteTodo = ( id ) => {
    const toDelete = todos.find((todo) => todo.id === id);
    if (toDelete) {
    setTodos(todos.filter(( todo )=> todo.id !== id ));
    console.log(`Deleted : ${ toDelete.text }`)
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h2" component="h2">
          Todo List
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} >
            <Item>
              <NewTodo addTodo={ addTodo } />
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>
              <TodoList todos={todos} deleteTodo={deleteTodo} />
            </Item>
          </Grid>
        </Grid>
      </Box>


    </>
  )
}

export default Todo