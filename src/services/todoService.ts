import {
  Todo,
  TodoInput,
  TodoInputSchema,
  TodoSchema,
} from '@/schemas/todoSchema'

const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch(`${API_BASE_URL}/todos`)
  if (!response.ok) {
    throw new Error('Failed to fetch todos')
  }
  const data = await response.json()
  return TodoSchema.array().parse(data)
}

export const fetchTodo = async (id: number): Promise<Todo> => {
  const response = await fetch(`${API_BASE_URL}/todos/${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch todo')
  }
  const data = await response.json()
  return TodoSchema.parse(data)
}

export const createTodo = async (todoInput: TodoInput): Promise<Todo> => {
  const validatedInput = TodoInputSchema.parse(todoInput)
  const response = await fetch(`${API_BASE_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(validatedInput),
  })
  if (!response.ok) {
    throw new Error('Failed to create todo')
  }
  const data = await response.json()
  return TodoSchema.parse(data)
}

export const updateTodo = async (todo: Todo): Promise<Todo> => {
  const validatedTodo = TodoSchema.parse(todo)
  const response = await fetch(`${API_BASE_URL}/todos/${validatedTodo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(validatedTodo),
  })
  if (!response.ok) {
    throw new Error('Failed to update todo')
  }
  const data = await response.json()
  return TodoSchema.parse(data)
}

export const deleteTodo = async (id: number): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
    method: 'DELETE',
  })
  if (!response.ok) {
    throw new Error('Failed to delete todo')
  }
}
