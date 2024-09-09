import { z } from 'zod'

export const TodoSchema = z.object({
  id: z.number(),
  title: z.string().min(1, 'Title cannot be empty'),
  completed: z.boolean(),
  userId: z.number(),
})

export type Todo = z.infer<typeof TodoSchema>

export const TodoInputSchema = TodoSchema.omit({ id: true })

export type TodoInput = z.infer<typeof TodoInputSchema>
