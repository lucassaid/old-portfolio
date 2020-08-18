import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import LocaleSwitcher from './localeSwitcher'
import useTranslation from '../hooks/useTranslation'
import Footer from './footer'
import ProfileImage from './profileImage'

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

  const ContactLink = ({arrow}) => (
    <Link href="/[lang]/contact" as={`/${locale}/contact`}>
      <a
        active={(page == 'contact').toString()}
        style={arrow ? {color: '#333'} : {}}
      >
        {t('contact')}
        {arrow && ' →'}
      </a>
    </Link>
  )

  return (
    <>
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
          <ContactLink></ContactLink>
        </div>
        <header className={styles.header}>
          {page == 'home' ? (
            <>
              <ProfileImage name={name}></ProfileImage>
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/[lang]" as={`/${locale}`}>
                <a>
                  <ProfileImage name={name} small></ProfileImage>
                </a>
              </Link>
              <h2 className={utilStyles.headingMd}>
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
      </div>
      <Footer
        name={name}
        profileImage={<ProfileImage name={name} small></ProfileImage>}
        contactLink={<ContactLink arrow></ContactLink>}
      ></Footer>
        
      <Drift
        appId="dibfryaiextr"
      />
    </>
  )
}