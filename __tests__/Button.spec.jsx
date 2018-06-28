import React from 'react'
import renderer from 'react-test-renderer'
import jest from 'jest'

import Button from '../src/shared/Button/button.jsx'

test('Button renders correctly', () => {
  const component = renderer.create(<Button />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
