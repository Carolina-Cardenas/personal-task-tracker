import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTodo } from "../redux/tasksSlice";
import "./../index.css";

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  
  const removeTask = () => {
    dispatch(deleteTask({ id }));
  };


  const handleToggleTodo = () => {
    dispatch(toggleTodo({ id }));
  };


  const [taskText, setTaskText] = useState<string>(text);

 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
  };

  const completedClass = completed ? "completed" : "";

  return (
    <li className={`todo-item ${completedClass}`}>
      <input
        type="checkbox"
        id={id.toString()} 
        className="checkbox"
        checked={completed}
        onChange={handleToggleTodo}
      />
      <label htmlFor={id.toString()} className="checkbox-label"></label>
      <input
        type="text"
        value={taskText}
        onChange={handleChange}
        className={`task-input ${completed ? "completed-input" : ""}`}
      />
      <button onClick={removeTask} className="delete-button">
        Delete
      </button>
    </li>
  );
};
