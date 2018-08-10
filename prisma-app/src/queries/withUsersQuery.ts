import withQuery from '../hocs/withQuery'

export default withQuery(`{
  users {
    id
    name
  }
}`)