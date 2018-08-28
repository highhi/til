import * as React from 'react';
import Form from '../../containers/Form/Form'
import TodoList from '../../containers/TodoList/TodoList'

const App: React.SFC = () => (
  <div>
    <Form />
    <TodoList />
  </div>
)

App.displayName = 'App'

export default App;
