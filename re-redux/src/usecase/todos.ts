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