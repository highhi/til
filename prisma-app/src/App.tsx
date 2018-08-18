import * as React from 'react';
import TodoForm from './components/contexts/TodoForm/TodoForm'
import Todos from './components/contexts/Todos/Todos'

const App: React.SFC = (): JSX.Element => {
  return <>
    <TodoForm />
    <Todos />
  </>
}

export default App;