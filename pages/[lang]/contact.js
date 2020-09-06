import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import withLocale from '../../hocs/withLocale'
import isLocale from '../../translations/isLocale'
import ContactForm from '../../components/contactForm'
import Section from '../../components/section'
import utilStyles from '../../styles/utils.module.css'
import useTranslation from '../../hooks/useTranslation'

const Contact = () => {
  
  const { t } = useTranslation()

  return (
    <Layout page="contact">
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Section title="Contact" bg bgMirror style={{minHeight: '400px'}}>
        <div className={`${utilStyles.dF} ${utilStyles.flexWrap} ${utilStyles.rowReverse}`}>
          
          <div className={`${utilStyles.col6} ${utilStyles.mb40}`}>
            <div className={utilStyles.caption}>{t('emailMeTo')}</div>
            <a href="mailto:lucas@lucassaid.me" >
              lucas@lucassaid.me →
            </a><br/><br/>
            <div className={utilStyles.caption}>{t('findMeAtGithub')}</div>
            <a target="_blank" href="https://github.com/lucassaid">
              github.com/lucassaid →
            </a>
          </div>

          <div className={utilStyles.col6}>
            <h2 style={{marginTop: 0}} className={utilStyles.headingMd}>Leave me a message</h2>
            <ContactForm></ContactForm>
          </div>
        </div>
      </Section>
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