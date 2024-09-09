// organisms/TodoSection.tsx
import React from 'react'

import { Card } from 'primereact/card'

import { Todo } from '@/schemas/todoSchema'

import { Button } from '../atoms/Button'
import { LoadingIndicator } from '../molecules/LoadingIndicator'

import { TodoList } from './TodoList'

interface TodoSectionProps {
  title: string
  isLoading: boolean
  isError: boolean
  onRefresh: () => void
  onToggleComplete: (todo: Todo) => void
  onDelete: (id: number) => void
}

export const TodoSection: React.FC<TodoSectionProps> = ({
  title,
  isLoading,
  isError,
  onRefresh,
  onToggleComplete,
  onDelete,
}) => {
  const header = (
    <div className="justify-content-between align-items-center flex p-2">
      <h2 className="mr-4 text-xl font-bold">{title}</h2>
      <Button icon="pi pi-refresh" onClick={onRefresh} />
    </div>
  )

  return (
    <Card header={header}>
      <LoadingIndicator loading={isLoading} />
      {!isLoading && !isError && (
        <TodoList onToggleComplete={onToggleComplete} onDelete={onDelete} />
      )}
      {isError && <div>Error fetching todos</div>}
    </Card>
  )
}
