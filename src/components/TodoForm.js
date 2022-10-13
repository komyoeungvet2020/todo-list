import React from "react";
import Button from '@material-ui/core/Button';
const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button color="primary" type="submit"> {editId ? "Edit" : "Go"}</Button>
    </form>
  );
};

export default TodoForm;
