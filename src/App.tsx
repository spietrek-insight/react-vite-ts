import { PrimeReactProvider } from 'primereact/api'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { GTM_ID, TRACKING_ID } from './constants/analytics'
import AnalyticsProvider from './providers/analytics'
import { I18nProvider } from './providers/intlProvider'
import AppRoutes from './routes'

import 'primereact/resources/themes/lara-light-cyan/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AnalyticsProvider gaTrackingId={TRACKING_ID} gtmId={GTM_ID}>
        <I18nProvider>
          <PrimeReactProvider>
            <AppRoutes />
          </PrimeReactProvider>
        </I18nProvider>
      </AnalyticsProvider>
    </QueryClientProvider>
  )
}

export default App
