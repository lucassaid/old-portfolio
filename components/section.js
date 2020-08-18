import utilStyles from '../styles/utils.module.css'

const Section = ({children, title, bg, bgMirror, style = {}, className = ''}) => {
  let bgClassNames = bg ? utilStyles.sectionBg : ``
  if(bgMirror) bgClassNames += ` ${utilStyles.sectionBgMirror}`
  return (
    <section 
      style={style}
      className={`${bgClassNames} ${utilStyles.mb20} ${utilStyles.headingMd} ${className}`}
    >
      {title && <h2 className={utilStyles.headingLg}>{title}</h2>}
      {children}
    </section>
  )
}
export default Section