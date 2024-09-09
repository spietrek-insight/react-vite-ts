import { Outlet } from 'react-router'

export const OneColumnPage = (): JSX.Element => (
  <div data-testid="OneColumnPage">
    <Outlet />
  </div>
)
