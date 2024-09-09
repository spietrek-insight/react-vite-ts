import React from 'react'

import { Todo } from '@/schemas/todoSchema'

import { TodoSection } from '../organisms/TodoSection'

interface TodoTemplateProps {
  isLoading: boolean
  isError: boolean
  onRefresh: () => void
  onToggleComplete: (todo: Todo) => void
  onDelete: (id: number) => void
}

export const TodoTemplate: React.FC<TodoTemplateProps> = ({
  isLoading,
  isError,
  onRefresh,
  onToggleComplete,
  onDelete,
}) => (
  <div className="mx-auto max-w-4xl p-4">
    <h1 className="mb-6 text-3xl font-bold">Todo List</h1>
    <TodoSection
      title="All Todos"
      isLoading={isLoading}
      isError={isError}
      onRefresh={onRefresh}
      onToggleComplete={onToggleComplete}
      onDelete={onDelete}
    />
  </div>
)
