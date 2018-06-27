import React from 'react'

const Button = (props) => {
  return (
    <div className='control'>
      <p className={'button ' + props.style}>
        {props.children}
      </p>
    </div>
  )
}

export default Button
