import Layout from '../../../components/layout'
import { getAllWorksIds, getWorkData } from '../../../lib/works'
import Head from 'next/head'
import Date from '../../../components/date'
import utilStyles from '../../../styles/utils.module.css'
import withLocale from '../../../hocs/withLocale'

const WorkDetail = ({workData, locale}) => {

  return (
    <Layout>
      <Head>
        <title>Lucas Said - {workData.title}</title>
      </Head>
      <article>
        <img src={workData.image} alt={workData.title} style={{width: 100}}/>
        <h1 className={utilStyles.headingXl}>{workData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={workData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: workData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllWorksIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const workData = await getWorkData(params.id, params.lang)
  return {
    props: {
      locale: params.lang,
      workData
    }
  }
}

export default withLocale(WorkDetail)