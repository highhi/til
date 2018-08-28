import { combineReducers } from 'redux'
import todos, { State as TodosState } from './todos'

export type State = {
  todos: TodosState
}

export default combineReducers({
  todos
})