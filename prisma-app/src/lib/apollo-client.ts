import ApolloCLient from 'apollo-client'
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new HttpLink({
  uri: 'http://localhost:4466',
})

export default function apolloClient() {
  return new ApolloCLient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
}