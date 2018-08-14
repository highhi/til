import gql from 'graphql-tag'

export default gql`
  query getUsers {
    users {
      id
      name
    }
  }
`