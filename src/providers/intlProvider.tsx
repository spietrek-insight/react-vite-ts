import { createContext, useEffect, useState } from 'react'

import { IntlProvider } from 'react-intl'

import intlMessagesEnUs from '../lang/en-US.json'
import intlMessagesFrFr from '../lang/fr-FR.json'

type locales = 'en-US' | 'fr-FR'

interface IMessage {
  [key: string]: string
}

export interface ILocaleMessages {
  [key: string]: string
}

const localeMessages = {
  'en-US': intlMessagesEnUs as IMessage,
  'fr-FR': intlMessagesFrFr as IMessage,
}

function loadLocaleData(locale: locales) {
  return localeMessages[locale as locales]
}

interface I18nProviderProps {
  children: React.ReactNode
}

export const LocaleContext = createContext<{
  locale: locales
  switchLocale: (newLocale: locales) => void
}>({
  locale: 'en-US',
  switchLocale: () => {},
})

export const I18nProvider = ({ children }: I18nProviderProps) => {
  const [locale, setLocale] = useState(
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    (localStorage.getItem('appLocale') as locales) || 'en-US',
  )
  const [messages, setMessages] = useState(loadLocaleData(locale))

  useEffect(() => {
    const currentLocale =
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      (localStorage.getItem('appLocale') as locales) || 'en-US'
    setLocale(currentLocale)
    setMessages(loadLocaleData(currentLocale))
  }, [])

  const switchLocale = (newLocale: locales) => {
    localStorage.setItem('appLocale', newLocale)
    setLocale(newLocale)
    setMessages(loadLocaleData(newLocale))
  }

  return (
    <IntlProvider locale={locale} messages={messages}>
      <LocaleContext.Provider value={{ locale, switchLocale }}>
        {children}
      </LocaleContext.Provider>
    </IntlProvider>
  )
}
