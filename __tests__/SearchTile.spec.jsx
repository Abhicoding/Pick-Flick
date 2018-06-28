import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import SearchTile from '../src/components/SearchTile/searchtile.jsx'

configure({adapter: new Adapter()})

test('SearchTile renders correctly', () => {
  const component = shallow(<SearchTile />)
  expect(component).toMatchSnapshot()
})
