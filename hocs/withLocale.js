import React from 'react'
import Error from 'next/error'
import { getDisplayName } from 'next/dist/next-server/lib/utils'
import { LocaleProvider } from '../context/LocaleContext'

export default WrappedPage => {
  const WithLocale = ({ locale, ...pageProps }) => {
    if (!locale) {
      return <Error statusCode={404} />
    }
    return (
      <LocaleProvider lang={locale}>
        <WrappedPage {...pageProps} />
      </LocaleProvider>
    )
  }

  WithLocale.displayName = `withLang(${getDisplayName(WrappedPage)})`

  return WithLocale
}