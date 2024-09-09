import { Suspense } from 'react'

import { Route, Routes } from 'react-router-dom'

import { BasePage } from '@/components/pages/layouts/BasePage'
import { OneColumnPage } from '@/components/pages/layouts/OneColumnPage'
import { HomePage } from '@/components/pages/views/HomePage'
import { NotFoundPage } from '@/components/pages/views/NotFoundPage'
import { TodoPage } from '@/components/pages/views/TodoPage'

const AppRoutes = (): JSX.Element => (
  <Suspense>
    <Routes>
      <Route path="/" element={<BasePage />}>
        <Route element={<OneColumnPage />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="todo" element={<TodoPage />} />
        </Route>
      </Route>
    </Routes>
  </Suspense>
)

export default AppRoutes
