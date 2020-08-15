import React from 'react'
import { useRouter } from 'next/dist/client/router'
import { locales, languageNames } from '../translations/config'
import { LocaleContext } from '../context/LocaleContext'
import styles from './localeSwitcher.module.css'
import utilStyles from '../styles/utils.module.css'

const LocaleSwitcher = () => {
  const router = useRouter()
  const { locale } = React.useContext(LocaleContext)

  const handleLocaleChange = React.useCallback(
    (e) => {
      const regex = new RegExp(`^/(${locales.join('|')})`)
      router.push(router.pathname, router.asPath.replace(regex, `/${e.target.value}`))
    },
    [router]
  )

  return (
    <div className={utilStyles.rightSeparator}>
      <select className={`${styles.select} ${utilStyles.rightSeparator}`} value={locale} onChange={handleLocaleChange}>
        {locales.map(locale => (
          <option className={styles.option} key={locale} value={locale}>
            {languageNames[locale]}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LocaleSwitcher