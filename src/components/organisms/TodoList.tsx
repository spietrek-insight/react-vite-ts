import React, { useState } from 'react'

import { Paginator } from 'primereact/paginator'

import { ListItem } from '@/components/molecules/ListItem'
import { Todo } from '@/schemas/todoSchema'
import useStore from '@/state/store'

interface TodoListProps {
  onToggleComplete: (todo: Todo) => void
  onDelete: (id: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({
  onToggleComplete,
  onDelete,
}) => {
  const todos = useStore(state => state.todos)
  const [first, setFirst] = useState(0)
  const [rows] = useState(10)

  const handlePageChange = (event: { first: number; rows: number }) => {
    setFirst(event.first)
  }

  const visibleTodos = todos.slice(first, first + rows)

  return (
    <div className="space-y-2">
      {visibleTodos.map(todo => (
        <ListItem
          key={todo.id}
          id={todo.id}
          content={todo.title}
          isCompleted={todo.completed}
          onToggleComplete={() => onToggleComplete(todo)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
      <Paginator
        first={first}
        rows={rows}
        totalRecords={todos.length}
        onPageChange={handlePageChange}
      />
    </div>
  )
}
