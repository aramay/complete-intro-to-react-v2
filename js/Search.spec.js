import React from 'react'
import Search from './Search'
import renderer from 'react-test-renderer'

test('Search should search title', () => {
  const component = renderer.create(<Search />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
