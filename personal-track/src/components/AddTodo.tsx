import React, { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";


interface Task {
  task: string;
}

export const AddTodo: React.FC = () => {
  const [value, setValue] = useState<string>("");

  const dispatch = useDispatch();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (value.trim().length === 0) {
      alert("Enter a task before adding !!");
      setValue("");
      return;
    }

    dispatch(
      addTask({
        task: value,
      } as Task)
    );

    setValue("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="add-todo">
      <input type="checkbox" className="checkbox-invisible" />
      <input
        type="text"
        className="task-input"
        placeholder="Add task"
        value={value}
        onChange={handleChange}
      />
      <button className="task-button" onClick={onSubmit}>
        Save
      </button>
    </div>
  );
};
