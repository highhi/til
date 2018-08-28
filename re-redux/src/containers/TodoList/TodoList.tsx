import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import TodoList from '../../components/TodoList/TodoList'
import { State } from '../../reducers'
import { toggleTodo, ToggleTodo, deleteTodo, DeleteTodo } from '../../actions'

export type DispatchProps = {
  toggleTodo(id: number): ToggleTodo
  deleteTodo(id: number): DeleteTodo
}

export default connect<State, DispatchProps, {}, State>(
  (state) => ({ todos: state.todos }),
  (dispatch: Dispatch) => ({
    toggleTodo: id => (dispatch(toggleTodo(id))),
    deleteTodo: id => (dispatch(deleteTodo(id)))
  })
)(TodoList)
