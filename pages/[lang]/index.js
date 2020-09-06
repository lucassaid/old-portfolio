import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getData } from '../../lib/getData'
import withLocale from '../../hocs/withLocale'
import isLocale from '../../translations/isLocale'
import useTranslation from '../../hooks/useTranslation'
import Section from '../../components/section'
import DevTool from '../../components/devTool'
import PortfolioItems from '../../components/portfolioItems'

const Home = ({ allPostsData, devTools, portfolio }) => {
  const { t } = useTranslation()
  return (
    <Layout page="home">
      <Head>
        <title>{siteTitle} - {t('home')}</title>
      </Head>
      
      <Section>
        <p>{t('quickDesc')}</p>
        <p>{t('desc')}</p>
      </Section>

      <Section title={t('workingOn')} bg>
        <PortfolioItems items={portfolio.workingOn}></PortfolioItems>
      </Section>
      
      <Section title={t('usedToDo')}>
        <PortfolioItems items={portfolio.usedToDo} centered colSize="col4"></PortfolioItems>
      </Section>

      <Section title={t('mainTools')} bg bgMirror>
        <div className={`${utilStyles.dF} ${utilStyles.flexWrap}`}>
          {devTools.frequentlyUsed.map(tool => (
            <DevTool key={tool.id} data={tool}></DevTool>
          ))}
        </div>
      </Section>

      <Section title={t('aboutMeTitle')}>
        <p className={`${utilStyles.caption}`}>
          {t('aboutMe')}
        </p>
      </Section>
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  const devTools = getData('dev-tools')
  const portfolio = getData('portfolio')
  const lang = ctx.query.lang
  const locale = typeof lang === 'string' && isLocale(lang) ? lang : undefined
  return {
    props: {
      devTools,
      portfolio,
      locale
    }
  }
}

export default withLocale(Home)