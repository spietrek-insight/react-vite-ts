import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { createTodoSlice, TodoState } from './todoStore'

// You can add more state slices here as your application grows
// import { OtherState, createOtherSlice } from './otherStore';

type StoreState = TodoState // & OtherState & ...

const useStore = create<StoreState>()(
  devtools(
    (...a) => ({
      ...createTodoSlice(...a),
      // ...createOtherSlice(...a),
    }),
    { name: 'Todo App Store' },
  ),
)

export default useStore
