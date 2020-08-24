import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import withLocale from '../../hocs/withLocale'
import isLocale from '../../translations/isLocale'
import ContactForm from '../../components/contactForm'
import Section from '../../components/section'
import utilStyles from '../../styles/utils.module.css'

const Contact = () => {
  return (
    <Layout page="contact">
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Section title="Keep in touch" bg bgMirror style={{minHeight: '400px'}}>
        <div className={utilStyles.dF}>
          <ContactForm className={utilStyles.col6}></ContactForm>
          
          <div className={`${utilStyles.col6} `}>
            <a href="mailto:lucas@lucassaid.me" className={utilStyles.caption}>
              lucas@lucassaid.me →
            </a><br/><br/>
            <a target="_blank" href="https://github.com/lucassaid" className={utilStyles.caption}>
              github.com/lucassaid →
            </a>
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