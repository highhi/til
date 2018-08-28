import * as React from 'react'
import { State } from '../../reducers'
import Todo from '../../components/Todo/Todo'
import { DispatchProps } from '../../containers/TodoList/TodoList'

export type Props = State & DispatchProps

const TodoList: React.SFC<Props> = (props) => {
  const todos = Object.keys(props.todos).map(key => {
    const todo = props.todos[key]
    return <Todo
      key={todo.id}
      id={todo.id}
      completed={todo.completed}
      text={todo.text}
      onChange={props.toggleTodo}
      onClick={props.deleteTodo}
    />
  })

  return <ul>{todos}</ul>
}

TodoList.displayName = 'TodoList'

export default TodoList

