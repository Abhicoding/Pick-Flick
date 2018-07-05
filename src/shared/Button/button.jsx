// @flow

import * as React from 'react'
import styled from 'styled-components'

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