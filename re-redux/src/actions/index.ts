import { Action } from 'redux'
let nextTodoId = 0

export enum TodoActionTypes {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  DELETE_TODO = 'DELETE_TODO',
}

export interface AddTodo extends Action {
  type: TodoActionTypes.ADD_TODO
  payload: {
    id: number
    text: string
  }
}

export function addTodo(text: string): AddTodo {
  return {
    type: TodoActionTypes.ADD_TODO,
    payload: {
      id: nextTodoId++,
      text
    }
  }
}

export interface ToggleTodo extends Action {
  type: TodoActionTypes.TOGGLE_TODO
  payload: {
    id: number
  }
}

export function toggleTodo(id: number): ToggleTodo {
  return {
    type: TodoActionTypes.TOGGLE_TODO,
    payload: { id }
  }
}

export interface DeleteTodo extends Action {
  type: TodoActionTypes.DELETE_TODO,
  payload: {
    id: number
  }
}

export function deleteTodo(id: number): DeleteTodo {
  return {
    type: TodoActionTypes.DELETE_TODO,
    payload: { id }
  }
}

export type TodoActions =
  | AddTodo
  | ToggleTodo
  | DeleteTodo