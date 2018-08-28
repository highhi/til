import { Reducer } from 'redux'
import { TodoActions, TodoActionTypes } from '../actions'
import { addTodoUseCase, toggleTodoUseCase, deleteTodoUseCase } from '../usecase/todos'

export type Todo = {
  id: number
  text: string
}

export type State = {
  [index: number]: Todo & {
    completed: boolean
  }
}

const todo: Reducer<State, TodoActions> = (state = {}, action) => {
  switch(action.type) {
    case TodoActionTypes.ADD_TODO:
      return addTodoUseCase(state, action.payload)
    case TodoActionTypes.TOGGLE_TODO:
      return toggleTodoUseCase(state, action.payload.id)
    case TodoActionTypes.DELETE_TODO:
      return deleteTodoUseCase(state, action.payload.id)
    default:
      return state
  }
}

export default todo
