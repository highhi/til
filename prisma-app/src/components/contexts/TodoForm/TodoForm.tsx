import * as React from 'react'
import withUsersQuery from '../../../queries/withUsersQuery'
import Button from '../../foundations/Button/Button'

interface IUser {
  id: string
  name: string
}

interface IProps {
  users: IUser[]
}

function renderOptions(users: IUser[]): JSX.Element[] {
  return users.map(user => (
    <option value={user.id} key={user.id}>{user.name}</option>
  ))
}

class TodoForm extends React.Component<IProps, {}> {
  public render() {
    return(
      <form onSubmit={this.onSubmit}>
        <select name="user">
          {renderOptions(this.props.users)}
        </select>
        <div>
          <input type="text" name="title" placeholder="title" />
        </div>
        <div>
          <textarea name="text" placeholder="text" />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    )
  }

  private onSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const form = event.currentTarget as HTMLFormElement
    const formData = new FormData(form)
    console.log(formData.get('user'))
  }
}

export default withUsersQuery<IProps, {}>(({ data }) => {
  return <TodoForm users={data.users} />
})
