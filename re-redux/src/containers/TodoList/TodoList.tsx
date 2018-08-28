import { connect } from 'react-redux'
import TodoList from '../../components/TodoList/TodoList'
import { State } from '../../reducers'

const msp = (state: State) => ({
  todos: state.todos
})

const mdp = () => ({})

export default connect(msp, mdp)(TodoList)
