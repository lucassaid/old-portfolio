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

const Home = ({ allPostsData, devTools, portfolio }) => {
  const { locale, t } = useTranslation()
  return (
    <Layout page="home">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{t('quickDesc')}</p>
        <p>A los 13 años empecé a aprender HTML y CSS modificando el código fuente de mi blog (Blogspot en aquel entonces).
          A prueba y error, copiando y pegando código (sin distinguir qué lenguajes eran), fuí agregando botones y cambiando el estilo, sin saber que gracias a eso encontré mi vocación.
          Desde ese entonces soy autodidacta, aunque sí hice cursos en mi ciudad (Comunidad It, UNT) y en platzi.
          Por lo general me resulta más rapido y efectivo leer documentación oficial de cualquier tecnología que comprar o asistir a un curso. 
          Trabajo mayormente como frontend, y es que después de 12 años de mi primer contacto con CSS, puedo decir que ya somos amigos.
          Actualmente estoy enfocado en aprender nuevas herramientas y profundizar en los coneptos base de la programación.
        </p>
        <h2 className={utilStyles.headingLg}>{t('workingOn')}</h2>
        <div className={`${utilStyles.dF} ${utilStyles.flexWrap}`}>
          {portfolio.workingOn.map(project => (
            <WorkingOn key={project.id} data={project}></WorkingOn>
          ))}
        </div>
        <h2 className={utilStyles.headingLg}>{t('usedToDo')}</h2>
        <div className={`${utilStyles.dF} ${utilStyles.flexWrap}`}>
          {portfolio.usedToDo.map(project => (
            <WorkingOn key={project.id} data={project}></WorkingOn>
          ))}
        </div>
        <h2 className={utilStyles.headingLg}>Qué suelo usar:</h2>
        <div className={`${utilStyles.dF} ${utilStyles.flexWrap}`}>
          {devTools.frequentlyUsed.map(tool => (
            <DevTool key={tool.id} data={tool}></DevTool>
          ))}
        </div>
        {/* <h2 className={utilStyles.headingLg}>Qué estoy aprendiendo:</h2>
        <div className={`${utilStyles.dF} ${utilStyles.flexWrap}`}>
          {devTools.learning.map(tool => (
            <DevTool key={tool.id} data={tool}></DevTool>
          ))}
        </div> */}
        <h2 className={utilStyles.headingLg}>Otros conocimientos:</h2>
        <p>
          Si bien me especializo en frontend, tengo los siguientes conocimientos de backend:
          Creación de REST APIS con Node y Express
          SQL: Mysql, Postgress, conocimientos básicos de estructuración y normalización de datos en una base de datos SQL.
          NoSQL: Firestore, MongoDB.
          I've also got experience and made works with Adobe Animate, Illustrator, CorelDraw, Photoshop, and video editors such as Vegas or Premiere.
          
        </p>
        <p>
          No se expresarlo bien pero dejar que la lógica defina el código, buenos nombres de variables
          Rápido desarrollo de aplicaciones web desde la idea inicial hasta el resultado final, pasando por el diseño de la experiencia de usuario, base de datos, backend y frontend.
          Apis rest con express.js. I've build REST api's with CRUD functionality
          Analítico y autocrítico. Fanático del buen código, los gatos y el café expreso.
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
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
      </section>
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

const WorkingOn = ({data}) => {
  const {name, image, link, id, video} = data
  const { t } = useTranslation()
  const desc = t(`${id}Desc`)
  return (
    <div className={`${utilStyles.mb20} ${utilStyles.col6} ${utilStyles.p03}`}>
      <div>
        {image && <img className={`${utilStyles.projectIcon} ${utilStyles.mb10}`} src={image} alt={name}/>}
        {video && (
          <video autoPlay muted src={video} className={`${utilStyles.projectIcon} ${utilStyles.mb10}`} alt={name}></video>
        )}
      </div>
      <div>
        {name}
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