import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Task {
  id: number;
  text: string;
  completed: boolean;
}


type TasksState = Task[];


const initialState: TasksState = [];


export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
 
    addTask: (state, action: PayloadAction<{ task: string }>) => {
      const newTask: Task = {
        id: Date.now(),
        text: action.payload.task,
        completed: false,
      };
      state.push(newTask);
    },
  
    deleteTask: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      return state.filter((item) => item.id !== id);
    },

    toggleTodo: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      const todo = state.find((todo) => todo.id === id);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { toggleTodo, addTask, deleteTask } = tasksSlice.actions;


export default tasksSlice.reducer;
