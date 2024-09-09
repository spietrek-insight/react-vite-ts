import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Todo } from '@/schemas/todoSchema'

import { Button } from '../atoms/Button'
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
}) => {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate('/')
  }

  return (
    <div className="mx-auto max-w-4xl p-4">
      <Button onClick={handleGoHome}>Home</Button>
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
}
