/* tslint:disable */
// This file was automatically generated and should not be edited.

import { MutationType } from "../../../__generated__/globalTypes";

// ====================================================
// GraphQL subscription operation: onTodoAdded
// ====================================================

export interface onTodoAdded_todo_node_user {
  id: string;
  name: string;
}

export interface onTodoAdded_todo_node {
  id: string;
  title: string;
  text: string | null;
  user: onTodoAdded_todo_node_user;
}

export interface onTodoAdded_todo {
  mutation: MutationType;
  node: onTodoAdded_todo_node | null;
}

export interface onTodoAdded {
  todo: onTodoAdded_todo | null;
}
