import useTranslation from '../hooks/useTranslation'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const PortfolioItem = ({data, centered}) => {
  const {name, image, link, id, video, style = {}} = data
  const { locale, t } = useTranslation()
  const desc = t(`${id}Desc`)
  const textAlign = centered ? 'center' : 'left'
  const justifyContent = centered ? 'center' : 'normal'
  const title = name || t(`${id}Title`)

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
        {title}
      </div>
      {desc && <div className={utilStyles.caption}>{desc}</div>}
      {link && (
        <>
        {typeof link === 'object' ? (
            <Link href={`/[lang]/${link.href}`} as={`/${locale}/${link.as}`}>
              <a
                className={`${utilStyles.textPrimary}`}
                alt={title}
              >
                {t('seeMore')}→
              </a>
            </Link>
          ) : (
            <a
              className={`${utilStyles.textPrimary}`}
              href={link}
              target="_blank"
              alt={title}
              rel="noopener noreferrer"
            >
              {t('seeMore')}→
            </a>
          )}
        </>
      )}
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
export default PortfolioItems