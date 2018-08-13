import * as React from 'react'
import { Mutation, MutationFn } from 'react-apollo'
import UserSelect from '../UserSelect/UserSelect'
import Button from '../../foundations/Button/Button'
import addTodoMutation from '../../../queries/addTodos'

interface IVariables {
  text: string
  title: string,
  userId: string,
}

interface IState {
  text: string,
  title: string,
  userId: string,
}

export default class TodoForm extends React.Component<{}, IState> {
  public static readonly displayName = 'TodoForm'
  public readonly state: IState = { text: '', title: '', userId: '' }

  public render() {
    return(
      <Mutation<any, IVariables> mutation={addTodoMutation}>
        {(addTodo) => (
          <form onSubmit={this.onSubmit(addTodo)}>
            <UserSelect value={this.state.userId} onChange={this.onChangeUser} />
            <div>
              <input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.onChangeTitle} />
            </div>
            <div>
              <textarea name="text" placeholder="text" value={this.state.text} onChange={this.onChangeText} />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        )}
      </Mutation>
    )
  }

  private onChangeUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const userId = event.currentTarget.value
    this.setState({ userId })
  }

  private onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const title = event.currentTarget.value.trim()
    this.setState({ title })
  }

  private onChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.currentTarget.value.trim()
    this.setState({ text })
  }

  private clearState = () => {
    this.setState({ title: '', text: '' })
  }

  private onSubmit = (mutation: MutationFn): (event: React.FormEvent<HTMLFormElement>) => void => {
    return event => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget as HTMLFormElement)
      mutation({ variables: {
        text: formData.get('text'),
        title: formData.get('title'),
        userId: formData.get('user'),
      } })
      this.clearState()
    }
  }
}
