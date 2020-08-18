import React, { useState } from 'react'
import utilStyles from '../styles/utils.module.css'

class DynamicInput extends React.Component {
  render() {
    const inputEl = this.props.multiline ? 'textarea' : 'input'
    return React.createElement(inputEl, this.props, null)
  }
}

const styles = {
  input: {
    borderRadius: '3px',
    border: '1px solid #e4e4e4',
    padding: '10px',
    marginBottom: '20px',
    width: '300px'
  }
}

const TextField = (props) => {
  return (
    <>
      <div className={utilStyles.caption}>{props.label}</div>
      <DynamicInput {...props} style={styles.input}/>
    </>
  )
}

export default TextField