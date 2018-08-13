import * as React from 'react'
import { graphql } from 'react-apollo'
import usersQuery from '../../../queries/users'

interface IData {
  users: Array<{ id: string, name: string }>
  loading: boolean,
  error: Error
}

interface IChildProps {
  data: IData
}

interface IProps {
  value: string,
  onChange(event: React.FormEvent<HTMLSelectElement>): void,
}

export default graphql<IProps, IData, {}, IChildProps>(usersQuery)(({ data, value, onChange }): JSX.Element => {
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
