import React, { useEffect } from 'react'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { TodoTemplate } from '@/components/templates/TodoTemplate'
import { Todo } from '@/schemas/todoSchema'
import { deleteTodo, fetchTodos, updateTodo } from '@/services/todoService'
import useStore from '@/state/store'

export const TodoPage: React.FC = () => {
  const queryClient = useQueryClient()
  const {
    setTodos,
    deleteTodo: deleteTodoFromStore,
    updateTodo: updateTodoInStore,
  } = useStore()

  const { isLoading, isError, data } = useQuery<Todo[], Error>({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  })

  useEffect(() => {
    if (data) {
      setTodos(data)
    }
  }, [data, setTodos])

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: (_, id) => {
      deleteTodoFromStore(id)
      void queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const updateMutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: updatedTodo => {
      updateTodoInStore(updatedTodo)
      void queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const handleRefresh = () => {
    void queryClient.invalidateQueries({ queryKey: ['todos'] })
  }

  const handleToggleComplete = (todo: Todo) => {
    updateMutation.mutate({ ...todo, completed: !todo.completed })
  }

  const handleDelete = (id: number) => {
    deleteMutation.mutate(id)
  }

  return (
    <TodoTemplate
      isLoading={isLoading}
      isError={isError}
      onRefresh={handleRefresh}
      onToggleComplete={handleToggleComplete}
      onDelete={handleDelete}
    />
  )
}
