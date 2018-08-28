import { State, Todo } from '../reducers/todos'

export function addTodoUseCase(state: State, todo: Todo): State {
  return Object.assign({}, state, {
    [todo.id]: {
      id: todo.id,
      text: todo.text,
      completed: false
    }
  })
}

export function toggleTodoUseCase(state: State, id: number): State {
  const newTodo = Object.assign({}, state[id], {
    completed: !state[id].completed
  })

  return Object.assign({}, state, {
    [newTodo.id]: newTodo
  })
}

export function deleteTodoUseCase(state: State, id: number): State {
  const clone = Object.assign({}, state)
  delete clone[id]
  return clone
}
