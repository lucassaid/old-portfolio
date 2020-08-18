import React from 'react'
import styles from './profileImage.module.css'
import utilStyles from '../styles/utils.module.css'

const ProfileImage = ({small = false, name}) => {
  const className = small ? 'profileImageSmall' : 'profileImage'
  return (
    <img
      src="/images/profile.jpg"
      className={`${styles[className]} ${utilStyles.borderCircle}`}
      alt={name}
    />
  )
}
export default ProfileImage