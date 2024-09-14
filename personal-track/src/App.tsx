// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


import React from "react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { CountTask } from "./components/CountTask";
import { tasksSlice } from "./redux/tasksSlice";


export interface RootState {
  tasks: ReturnType<typeof tasksSlice.reducer>;
}

const rootReducer = combineReducers({
  tasks: tasksSlice.reducer,
});


const store = configureStore({
  reducer: rootReducer,
});


export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="body">
        <h1 className="h1">My To Do list</h1>
        <AddTodo />
        <TodoList />
        <CountTask />
      </div>
    </Provider>
  );
};
