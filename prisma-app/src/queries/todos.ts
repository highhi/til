import gql from 'graphql-tag'

export default gql`
  query getTodos {
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