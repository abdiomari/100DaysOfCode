import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
} from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = ({ todos = [], deleteTodo }) => {
  // const todos = ["1", "2", "3", "4", "5"];
  return (
    <List sx={{ width: "100%", maxWidth: 360 }}>
      { todos.map( ( todo ) => (
        <ListItem
          key={ todo.id }
          disableGutters
          secondaryAction={
            <>
            <IconButton aria-label="complete">
              <Checkbox  checked={ todos.completed } />
              </IconButton>
              <IconButton aria-label="comment">
                <CommentIcon />    
              </IconButton>
              <IconButton aria-label="delete" onClick={() => deleteTodo(todo.id)}>
                <DeleteIcon />
              </IconButton>
            </>
          }
        >
          <ListItemText primary={`Todo: ${ todo.text }`} />
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
