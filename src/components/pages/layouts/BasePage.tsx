import { Outlet } from 'react-router-dom'

export const BasePage = (): JSX.Element => {
  return (
    <main className="min-h-screen p-2" data-testid="BasePage">
      <Outlet />
    </main>
  )
}
