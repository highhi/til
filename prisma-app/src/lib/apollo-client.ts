import ApolloCLient from 'apollo-client'
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

// see: https://github.com/apollographql/apollo-client/issues/3090
interface IDefinintion {
  kind: string;
  operation?: string;
};

const wsLink = new WebSocketLink({
  options: { reconnect: true },
  uri: 'ws://localhost:4466',
})

const httpLink = new HttpLink({
  uri: 'http://localhost:4466',
})

const link = split(
  ({ query }) => {
    const { kind, operation }: IDefinintion = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink,
)

export default function apolloClient() {
  return new ApolloCLient({
    cache: new InMemoryCache(),
    link,
  });
}