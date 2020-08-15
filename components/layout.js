import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import LocaleSwitcher from './localeSwitcher'
import useTranslation from '../hooks/useTranslation'

const Drift = dynamic(
  () => import('react-driftjs'), 
  {
    ssr: false,
    loading: () => <div>Cargando</div>
  }
)

const name = 'Lucas Said'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, page }) {
  const { locale, t } = useTranslation()

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`/images/profile.jpg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />

      </Head>
      <div className={`${styles.topbar} ${utilStyles.dF} ${utilStyles.jCEnd}`}>
        <LocaleSwitcher></LocaleSwitcher>

        <Link href="/[lang]/contact" as={`/${locale}/contact`}>
          <a active={(page == 'contact').toString()}>{t('contact')}</a>
        </Link>
      </div>
      <header className={styles.header}>
        {page == 'home' ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/[lang]" as={`/${locale}`}>
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/[lang]" as={`/${locale}`}>
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {page != 'home' && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}

      <footer className={styles.footer}>
        <a className={`${utilStyles.textInherit} ${utilStyles.dF} ${utilStyles.jCCenter}`}
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/images/logos/vercel.svg" alt="Vercel Logo" className={styles.footerLogo} />
        </a>
      </footer>
      
      <Drift
        appId="dibfryaiextr"
      />
    </div>

  )
}