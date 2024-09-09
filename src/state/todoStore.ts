import { StateCreator } from 'zustand'

import { Todo } from '@/schemas/todoSchema'

export interface TodoState {
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
  deleteTodo: (id: number) => void
  updateTodo: (updatedTodo: Todo) => void
}

export const createTodoSlice: StateCreator<TodoState> = set => ({
  todos: [],
  setTodos: todos => set({ todos }),
  deleteTodo: id =>
    set(state => ({
      todos: state.todos.filter(todo => todo.id !== id),
    })),
  updateTodo: updatedTodo =>
    set(state => ({
      todos: state.todos.map(todo =>
        todo.id === updatedTodo.id ? updatedTodo : todo,
      ),
    })),
})
