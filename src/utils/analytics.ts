// src/utils/analytics.ts
import ReactGA from 'react-ga4'
import TagManager from 'react-gtm-module'

export const initializeGA = (trackingId: string) => {
  ReactGA.initialize(trackingId)
}

export const initializeGTM = (gtmId: string) => {
  TagManager.initialize({ gtmId })
}

export const trackPageView = (page: string) => {
  ReactGA.send({ hitType: 'pageview', page })
}

export const trackEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number,
) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  })
}

export const trackTiming = (
  category: string,
  name: string,
  value: number,
  label?: string,
) => {
  ReactGA.event({
    category,
    action: `timing_${name}`,
    label,
    value,
    nonInteraction: true, // This prevents the timing event from affecting bounce rate
  })
}
