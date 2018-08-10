import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo'
import App from './App';
import './index.css';
import apolloClient from './lib/apollo-client'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <ApolloProvider client={apolloClient()}>
    <App />
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
