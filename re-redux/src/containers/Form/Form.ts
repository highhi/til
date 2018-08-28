import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Form from '../../components/Form/Form'
import { addTodo } from '../../actions'

const msp = () => ({})

const mdp = (dispatch: Dispatch) => ({
  addTodo(text: string) { return dispatch(addTodo(text)) }
})

export default connect(msp, mdp)(Form)
