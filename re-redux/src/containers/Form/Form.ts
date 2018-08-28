import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Form from '../../components/Form/Form'
import { addTodo, AddTodo } from '../../actions'

export type DispatchProps = {
  addTodo(text: string): AddTodo
}

export default connect<{}, DispatchProps>(
  () => ({}),
  (dispatch: Dispatch) => ({
    addTodo: (text) => (dispatch(addTodo(text)))
  })
)(Form)
