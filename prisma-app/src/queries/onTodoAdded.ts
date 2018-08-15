import gql from 'graphql-tag'

export default gql`
  subscription onTodoAdded {
    todo(where: {
      mutation_in: [CREATED]
    }) {
      mutation
      node {
        id
        title
        text
        user {
          id
          name
        }
      }
    }
  }
`