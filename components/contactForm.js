import React, { useState } from 'react'
import axios from 'axios'
import useTranslation from '../hooks/useTranslation'
import styles from './contactForm.module.css'
import utilStyles from '../styles/utils.module.css'
import Button from './button'
import TextField from './textField'

const INITIAL_INPUTS = {
  name: '',
  email: '',
  message: ''
}

const ContactForm = ({className}) => {

  const { t } = useTranslation()

  const [inputs, setInputs] = useState(INITIAL_INPUTS)

  const handleInputChange = ({target}) => {
    const value = target.id == 'file' ? [target.files[0]] : target.value
    setInputs({ ...inputs, [target.id]: value})
  }

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs(INITIAL_INPUTS)
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/mwkrrokw',
      data: inputs
    })
      .then(response => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        )
      })
      .catch(error => {
        handleServerResponse(false, error.response.data.error)
      })
  }

  if(status.submitted) return (
    <div className={className}>
      <div>
        <img className={styles.okImage} src="/images/coffee-ok.svg"></img>
      </div>
      <div>Mensaje enviado!</div>
    </div>
  )

  return (
    <form id="form" className={className} onSubmit={handleOnSubmit}>
      <TextField
        id="name"
        type="text"
        label={t('nameLabel')}
        name="name"
        value={inputs.name}
        onChange={handleInputChange}
        required
        autoComplete="name"
      />
      <TextField
        id="email"
        type="email"
        label="Email"
        name="_replyto"
        value={inputs.email}
        onChange={handleInputChange}
        required
        autoComplete="email"
      />
      <TextField
        id="message"
        name="message"
        label={t('messageLabel')}
        value={inputs.message}
        onChange={handleInputChange}
        rows={3}
        multiline="true"
      />

      <div>
        <Button
          type="submit"
          primary="true"
          disabled={status.submitting}
        >
          {t(status.submitting ? 'sending' : 'send')}
        </Button>
      </div>

      <input type="hidden" name="_subject" value="Nueva consulta desde lucassaid.me"></input>
    </form>
  )
}

export default ContactForm