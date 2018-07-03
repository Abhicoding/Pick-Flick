// @flow

import * as React from 'react'

type Props = {
  style: string,
  children: React.Node
}

const Button = (props: Props) => {
  return (
    <div className='control'>
      <p className={'button ' + props.style}>
        {props.children}
      </p>
    </div>
  )
}

export default Button
