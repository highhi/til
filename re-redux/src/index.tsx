import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
