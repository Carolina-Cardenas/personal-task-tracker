
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TASK = "DELETE_TASK";

interface AddTodoPayload {
  text: string;
}

interface ToggleTodoPayload {
  id: number;
}

interface DeleteTaskPayload {
  taskId: number;
}

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: AddTodoPayload;
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: ToggleTodoPayload;
}

interface DeleteTaskAction {
  type: typeof DELETE_TASK;
  payload: DeleteTaskPayload;
}


export type TodoActionTypes = AddTodoAction | ToggleTodoAction | DeleteTaskAction;


export function addTodo(todo: AddTodoPayload): AddTodoAction {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}


export function toggleTodo(id: number): ToggleTodoAction {
  return {
    type: TOGGLE_TODO,
    payload: { id },
  };
}

export const deleteTask = (taskId: number): DeleteTaskAction => ({
  type: DELETE_TASK,
  payload: { taskId },
});

