
// import { ADD_TODO, TOGGLE_TODO, DELETE_TASK, TodoActionTypes } from "./actions";

// interface Todo {
//   id: number;
//   text: string;
//   completed: boolean;
// }



// interface TodoState {
//   todos: Todo[];
// }

// const initialState: TodoState = {
//   todos: [],
// };

// export default function reducer(
//   state = initialState,
//   action: TodoActionTypes
// ): TodoState {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [...state.todos, action.payload],
//       };

//     case TOGGLE_TODO: {
    
//       const updatedTodos = state.todos.map((todo) => {
//         if (todo.id === action.payload.id) {
//           return { ...todo, completed: !todo.completed };
//         }
//         return todo;
//       });
//       return {
//         ...state,
//         todos: updatedTodos,
//       };
//     }

//     case DELETE_TASK:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.payload.taskId),
//       };

//     default:
//       return state;
//   }
// }
import { ADD_TODO, TOGGLE_TODO, DELETE_TASK, TodoActionTypes } from "./actions";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

export default function reducer(
  state = initialState,
  action: TodoActionTypes
): TodoState {
  switch (action.type) {
    case ADD_TODO: {
     
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload.text, 
        completed: false, 
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    } 

    case TOGGLE_TODO: {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodos,
      };
    }

    case DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.taskId),
      };

    default:
      return state;
  }
}




