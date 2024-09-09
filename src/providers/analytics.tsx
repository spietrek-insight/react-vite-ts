import { useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import { AnalyticsProvider as ContextProvider } from '@/state/analytics'
import { initializeGA, initializeGTM, trackPageView } from '@/utils/analytics'

interface AnalyticsProviderProps {
  gaTrackingId: string
  gtmId: string
  children: React.ReactNode
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  gaTrackingId,
  gtmId,
  children,
}) => {
  const location = useLocation()

  useEffect(() => {
    initializeGA(gaTrackingId)
    initializeGTM(gtmId)
  }, [gaTrackingId, gtmId])

  useEffect(() => {
    trackPageView(location.pathname)
  }, [location.pathname])

  return <ContextProvider>{children}</ContextProvider>
}

export default AnalyticsProvider
