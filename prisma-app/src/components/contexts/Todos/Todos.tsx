import * as React from 'react'
import { Query } from 'react-apollo'
import todosQuery from '../../../queries/todos'
import onTodoAdded from '../../../queries/onTodoAdded'
// import { IDataMeta } from '../../../types'
import { getTodos_todoes as ITodo } from '../../../queries/__generated__/getTodos'

// interface IData extends IDataMeta {  
//   todoes: ITodo[]
// }

interface IProps {
  todoes: ITodo[]
  subscribe(): void
}

class Todos extends React.Component<IProps, {}> {
  public componentDidMount() {
    this.props.subscribe()
  }

  public render() {
    const todos = this.props.todoes || []
    return <div>
      {todos.map(todo => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  }
}

const TodosWithData = () => (
  <Query<any> query={todosQuery}>
    {({ subscribeToMore, data }) =>
      <Todos todoes={data!.todoes} subscribe={() =>
        subscribeToMore({
          document: onTodoAdded,
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) {
              return prev
            }

            // prismaサーバーから直接値をフェッチしているため最後のnodeの中に値が格納されている
            // そのため<Qery>のData型が本来の型（IData）と一致しないためanyとしている
            // TODO: クライアント用のGraphQLサーバーを用意する
            const todo = subscriptionData.data.todo.node

            return Object.assign({}, prev, {
              todoes: [todo, ...prev.todoes]
            })
          }
        })
      } />
    }
  </Query>
)

export default TodosWithData