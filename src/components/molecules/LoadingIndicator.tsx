import { ProgressSpinner } from 'primereact/progressspinner'

interface LoadingIndicatorProps {
  loading: boolean
}

export const LoadingIndicator = ({
  loading,
}: LoadingIndicatorProps): JSX.Element | null => {
  if (!loading) return null

  return (
    <div className="flex size-full items-center justify-center">
      <ProgressSpinner
        className="size-[80px]"
        strokeWidth="5"
        animationDuration="1s"
      />
    </div>
  )
}
