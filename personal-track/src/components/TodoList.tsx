
import { useDispatch, useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";
import { toggleTodo } from "../redux/tasksSlice";
import { RootState } from "./redux/store"


interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.tasks);

  return (
    <ul className="tasks-list">
      {todos.map((todo: Task) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          toggleTodo={()=> dispatch(toggleTodo({ id: todo.id }))}
        />
      ))}
    </ul>
  );
};



