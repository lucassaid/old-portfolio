import useTranslation from '../hooks/useTranslation'
import utilStyles from '../styles/utils.module.css'

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
export default DevTool