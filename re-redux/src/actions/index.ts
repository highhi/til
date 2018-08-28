import { Action } from 'redux'
let nextTodoId = 0

export enum Actions {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO'
}

export interface AddTodo extends Action {
  type: 'ADD_TODO'
  payload: {
    id: number
    text: string
  }
}

export interface ToggleTodo extends Action {
  type: 'TOGGLE_TODO'
  payload: {
    id: number
  }
}

export type TodoActionCreator = {
  addTodo(text: string): AddTodo
}

export function addTodo(text: string): AddTodo {
  return {
    type: 'ADD_TODO',
    payload: {
      id: nextTodoId++,
      text
    }
  }
}

export function toggleTodo(id: number): ToggleTodo {
  return {
    type: 'TOGGLE_TODO',
    payload: { id }
  }
}

// export interface TodoActionCreator 
//   extends ActionCreatorsMapObject<AddTodo> {
//   addTodo: ActionCreator<AddTodo>
// }

export type TodoActions =
  | AddTodo
  | ToggleTodo