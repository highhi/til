import * as React from 'react'
import Todo from '../../components/Todo/Todo'
import { State } from '../../reducers'

export type Props = State

const TodoList: React.SFC<Props> = (props) => {
  const todos = Object.keys(props.todos).map(key => {
    const todo = props.todos[key]
    return <Todo
      key={todo.id}
      id={todo.id}
      completed={todo.completed}
      text={todo.text}
    />
  })

  return <ul>{todos}</ul>
}

TodoList.displayName = 'TodoList'

export default TodoList

