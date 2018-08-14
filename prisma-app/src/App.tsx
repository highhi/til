import * as React from 'react';
import TodoForm from './components/contexts/TodoForm/TodoForm'
import Todos from './components/contexts/Todos/Todos'
import './App.css';

class App extends React.Component {
  public render() {
    return <>
      <TodoForm />
      <Todos />
    </>
  }
}

export default App;
