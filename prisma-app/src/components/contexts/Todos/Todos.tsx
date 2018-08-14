import * as React from 'react'
import { graphql } from 'react-apollo'
import todosQuery from '../../../queries/todos'
import { IDataMeta } from '../../../types'

interface IUser {
  id: string,
  name: string,
}

interface ITodo {
  id: string,
  title: string,
  text: string,
  user: IUser
}

interface IData extends IDataMeta {
  // prisma的にはtodoの複数形はtodosではなくtodoesらしい
  todoes: ITodo[]
}

interface IProps {
  data: IData
}

const Todos: React.SFC<IProps> = ({ data }) => {
  if (data.loading) {
    return <p>loading...</p>
  }

  if (data.error) {
    return <p>{data.error.message}</p>
  }

  const todos = data.todoes.map(todo => (
    <tr key={todo.id}>
      <td>{todo.title}</td>
      <td>{todo.text}</td>
      <td>{todo.user.name}</td>
    </tr>
  ))

  return <table>
    <tr>
      <td>Title</td>
      <td>Text</td>
      <td>Auther</td>
    </tr>
    <>{todos}</>
  </table>
}

Todos.displayName = 'Todos'

export default graphql<{}, IData, {}, IProps>(todosQuery)(Todos)