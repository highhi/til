/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getTodos
// ====================================================

export interface getTodos_todoes_user {
  id: string;
  name: string;
}

export interface getTodos_todoes {
  id: string;
  title: string;
  text: string | null;
  user: getTodos_todoes_user;
}

export interface getTodos {
  todoes: (getTodos_todoes | null)[];
}
