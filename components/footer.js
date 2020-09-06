import React from 'react'
import styles from './footer.module.css'
import utilStyles from '../styles/utils.module.css'
import useTranslation from '../hooks/useTranslation'

const Footer = ({profileImage, contactLink, name}) => {
  const { t } = useTranslation()

  return(
    <div className={`${styles.footer}`}>
      <div className={`${styles.footerContent} ${utilStyles.sectionBg}`}>
        <div className={styles.container}>
          
          <div style={{flexWrap: 'wrap'}} className={`${utilStyles.dF} ${utilStyles.mb20}`}>
            <div className={styles.avatarContainer}>
              {profileImage}
            </div>
            <div>
              <h3
                className={utilStyles.headingLg}
                style={{lineHeight: 1, marginBottom: 5}}
              >
                {name}
              </h3>
              <p style={{margin: 0, marginBottom: 5}}>{t('aboutMeFooter')}</p>
              {contactLink}
            </div>
          </div>

          {/* <a 
            className={`${utilStyles.textInherit} ${utilStyles.dF} ${utilStyles.jCCenter} ${utilStyles.aICenter}`}
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: 'black', opacity: 0.5}}
          >
            Powered by{' '}
            <img src="/images/logos/vercel.svg" alt="Vercel Logo" className={styles.footerLogo} />
          </a> */}
        </div>
      </div>
    </div>
  )
}
export default Footer