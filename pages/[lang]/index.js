import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'
import { getData } from '../../lib/getData'
import Link from 'next/link'
import Date from '../../components/date'
import withLocale from '../../hocs/withLocale'
import isLocale from '../../translations/isLocale'
import useTranslation from '../../hooks/useTranslation'
import Section from '../../components/section'

const Home = ({ allPostsData, devTools, portfolio }) => {
  const { t } = useTranslation()
  return (
    <Layout page="home">
      <Head>
        <title>{siteTitle}</title>
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

      {/* <h2 className={utilStyles.headingLg}>Qué estoy aprendiendo:</h2>
      <div className={`${utilStyles.dF} ${utilStyles.flexWrap}`}>
        {devTools.learning.map(tool => (
          <DevTool key={tool.id} data={tool}></DevTool>
        ))}
      </div> */}
      <Section title={t('aboutMeTitle')}>
        <p className={`${utilStyles.caption}`}>
          {t('aboutMe')}
        </p>
      </Section>

      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  )
}

const DevTool = ({data}) => {
  const {name, icon, link, id} = data
  const { t } = useTranslation()
  const desc = t(`${id}Desc`)
  return (
    <div className={`${utilStyles.mb20} ${utilStyles.col6} ${utilStyles.p03}`}>
      <a className={`${utilStyles.textInherit} ${utilStyles.dF}`}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={`${utilStyles.toolIcon} ${utilStyles.mr10}`} src={icon} alt=""/>
        {name}
      </a>
      {desc && <div className={utilStyles.caption}>{desc}</div>}
    </div>
  )
}

const PortfolioItems = ({items, centered, colSize="col6"}) => {
  return (
    <div className={`${utilStyles.dF} ${utilStyles.flexWrap}`}>
      {items.map(item => (
        <div key={item.id} className={`${utilStyles.mb20} ${utilStyles[colSize]}`}>
          <PortfolioItem data={item} centered={centered}></PortfolioItem>
        </div>
      ))}
    </div>
  )
}

const PortfolioItem = ({data, centered}) => {
  const {name, image, link, id, video, style = {}} = data
  const { t } = useTranslation()
  const desc = t(`${id}Desc`)
  const textAlign = centered ? 'center' : 'left'
  const justifyContent = centered ? 'center' : 'normal'
  return (
    <div className={utilStyles.p03} style={{textAlign}}>
      <div className={utilStyles.mb10} style={{display: 'flex', justifyContent}}>
        {image && (
          <img
            className={utilStyles.projectIcon}
            src={image}
            alt={name}
            style={style}
          />
        )}
        {video && (
          <video 
            autoPlay
            muted
            loop
            src={video}
            className={utilStyles.projectIcon}
            alt={name}
            style={style}
          >
          </video>
        )}
      </div>
      <div>
        {name || t(`${id}Title`)}
      </div>
      {desc && <div className={utilStyles.caption}>{desc}</div>}
      {link && (
        <a className={`${utilStyles.textPrimary}`}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('seeMore')}→
        </a>
      )}
    </div>
  )
}

export async function getServerSideProps(ctx) {
  const allPostsData = getSortedPostsData()
  const devTools = getData('dev-tools')
  const portfolio = getData('portfolio')
  const lang = ctx.query.lang
  const locale = typeof lang === 'string' && isLocale(lang) ? lang : undefined
  return {
    props: {
      allPostsData,
      devTools,
      portfolio,
      locale
    }
  }
}

export default withLocale(Home)