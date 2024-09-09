import { createContext, useMemo } from 'react'

import { trackEvent, trackTiming } from '@/utils/analytics'

interface AnalyticsContextProps {
  trackEvent: (
    category: string,
    action: string,
    label?: string,
    value?: number,
  ) => void
  trackTiming: (
    category: string,
    name: string,
    value: number,
    label?: string,
  ) => void
}

const AnalyticsContext = createContext<AnalyticsContextProps | undefined>(
  undefined,
)

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const analyticsValue = useMemo(() => ({ trackEvent, trackTiming }), [])

  return (
    <AnalyticsContext.Provider value={analyticsValue}>
      {children}
    </AnalyticsContext.Provider>
  )
}
