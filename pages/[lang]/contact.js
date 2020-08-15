import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import withLocale from '../../hocs/withLocale'
import isLocale from '../../translations/isLocale'
import useTranslation from '../../hooks/useTranslation'

const Contact = ({ allPostsData, devTools }) => {
  const { locale, t } = useTranslation()
  return (
    <Layout page="contact">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{t('quickDesc')}</p>
      </section>
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  const lang = ctx.query.lang
  const locale = typeof lang === 'string' && isLocale(lang) ? lang : undefined
  return {
    props: {
      locale
    }
  }
}

export default withLocale(Contact)