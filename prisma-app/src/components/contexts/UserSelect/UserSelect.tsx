import * as React from 'react'
import { graphql } from 'react-apollo'
import usersQuery from '../../../queries/users'
import { getUsers_users as IUser } from '../../../queries/__generated__/getUsers'

interface IData {
  users: IUser[]
  loading: boolean,
  error: Error
}

interface IChildProps {
  data: IData
}

interface IProps {
  value: string,
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void
}

const UserSelect: React.SFC<IChildProps & IProps> = (({ data, value, onChange }): JSX.Element => {
  if (data.loading) {
    return <p>loading...</p>
  }

  if (data.error) {
    return <p>{data.error.message}</p>
  }

  const users = data.users.map(user => (
    <option value={user.id} key={user.id}>{user.name}</option>
  ))

  return <select value={value} onChange={onChange} name="user">{users}</select>
})

UserSelect.displayName = 'UserSelect'

export default graphql<IProps, IData, {}, IChildProps>(usersQuery)(UserSelect)
