import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Search from '../src/shared/Search/search.jsx'

configure({adapter: new Adapter()})

test('Search renders correctly', () => {
  expect(shallow(<Search />)).toMatchSnapshot()
})
