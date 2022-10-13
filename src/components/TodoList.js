import React from "react";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ul className="allTodos">
      {todos.map((t) => (
        <li className="singleTodo">
          <span className="todoText" key={t.id}>
            {t.todo}
          </span>
          <Button onClick={() => handleEdit(t.id)}><EditIcon/></Button>
          <Button onClick={() => handleDelete(t.id)}><DeleteIcon/></Button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
