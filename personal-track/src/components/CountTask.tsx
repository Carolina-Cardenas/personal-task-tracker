
import { useSelector } from "react-redux";
import { RootState } from "../redux/tasksSlice";

interface Task {
  id: number;
  task: string;
  completed: boolean;
}

export const CountTask: React.FC = () => {
  
    const tasks = useSelector((state: RootState) => state.tasks as Task[] || []);


  const totalTasks = tasks.length;
  const incompleteTasks = tasks.filter((task: Task) => !task.completed).length;
  const completeTasks = tasks.filter((task: Task) => task.completed).length;

  return ( 
    <div className="container-boxes">
      <p>You have total {totalTasks} tasks.</p>
      <p>You have {incompleteTasks} incomplete tasks.</p>
      <p>You have {completeTasks} completed tasks.</p>
    </div>

  )};

