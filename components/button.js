import React from 'react'

const Button = (props) => {
  const bgColor = props.primary ? `var(--primary-color)` : `transparent`
  const color = props.primary ? `white` : `var(--primary-text-color)` 
  const border = props.primary ? `none` : `2px solid coral`

  return(
    <>
      <button {...props}>
        {props.children}
      </button>  
      <style jsx>{`
        button {
          padding: 8px 15px;
          border: ${border};
          border-radius: 3px;
          background: ${bgColor};
          color: ${color};
          font-size: 1rem;
          cursor: pointer;
        }

        button[disabled] {
          cursor: auto;
          opacity: 0.6;
        }
      `}</style>
    </>
  )
}

export default Button