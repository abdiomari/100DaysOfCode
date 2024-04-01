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

const TodoList = () => {
  const todos = ["1", "2", "3", "4", "5"];
  return (
    <List sx={{ width: "100%", maxWidth: 360 }}>
      {todos.map((value) => (
        <ListItem
          key={value}
          disableGutters
          secondaryAction={
            <>
            <IconButton aria-label="comment">
              <Checkbox />
              </IconButton>
              <IconButton aria-label="comment">
                <CommentIcon />    
              </IconButton>
              <IconButton aria-label="comment">
                <DeleteIcon />
              </IconButton>
              
              
            </>
          }
        >
          <ListItemText primary={`Todo ${value}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
