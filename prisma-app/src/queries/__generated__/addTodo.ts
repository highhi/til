/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addTodo
// ====================================================

export interface addTodo_createTodo {
  id: string;
  title: string;
  text: string | null;
}

export interface addTodo {
  createTodo: addTodo_createTodo;
}

export interface addTodoVariables {
  userId: string;
  title: string;
  text?: string | null;
}
