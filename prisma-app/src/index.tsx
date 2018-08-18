import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo'
import apolloClient from './lib/apollo-client'
import App from './App'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ApolloProvider client={apolloClient()}>
    <App />
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
