import React from 'react'

import { Checkbox } from 'primereact/checkbox'

import { Button } from '@/components/atoms/Button'

interface ListItemProps {
  id: number
  content: string
  isCompleted: boolean
  onToggleComplete: (id: number) => void
  onDelete: (id: number) => void
}

export const ListItem: React.FC<ListItemProps> = ({
  id,
  content,
  isCompleted,
  onToggleComplete,
  onDelete,
}) => (
  <div className="flex items-center justify-between p-2">
    <div className="flex items-center">
      <Checkbox
        checked={isCompleted}
        onChange={() => onToggleComplete(id)}
        className="mr-2"
      />
      <span className={isCompleted ? 'text-gray-500 line-through' : ''}>
        {content}
      </span>
    </div>
    <Button
      icon="pi pi-trash"
      className="p-button-danger p-button-text"
      onClick={() => onDelete(id)}
    />
  </div>
)
