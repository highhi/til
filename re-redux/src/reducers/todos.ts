import { Reducer } from 'redux'
import { TodoActions } from '../actions'
import { addTodoUseCase } from '../usecase/todos'

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
    case 'ADD_TODO':
      return addTodoUseCase(state, action.payload)
    default:
      return state
  }
}

export default todo
