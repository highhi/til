import gql from 'graphql-tag'

export default gql`
  mutation addTodo($userId: ID!, $title: String!, $text: String) {
    createTodo(data: {
      title: $title
      text: $text
      user: {
        connect: {
          id: $userId
        }
      }
    }) {
      id
      title
      text
    }
  }
`