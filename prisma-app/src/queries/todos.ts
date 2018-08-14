import gql from 'graphql-tag'

export default gql`
  query {
    todoes {
      id
      title
      text
      user {
        id
        name
      }
    }
  }
`