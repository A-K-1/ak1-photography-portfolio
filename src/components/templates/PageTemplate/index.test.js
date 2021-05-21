import React from 'react'
import { mount, shallow } from 'enzyme'
import PageTemplate from '.'

const wrap = (props = {}) =>
  shallow(
    <PageTemplate navbar="navbar" footer="footer" {...props}>
      test
    </PageTemplate>,
  )

it('mounts', () => {
  mount(
    <PageTemplate navbar="navbar" footer="footer">
      test
    </PageTemplate>,
  )
})

it('renders children when passed in', () => {
  const wrapper = wrap()
  expect(wrapper.contains('test')).toBe(true)
})

it('renders navbar', () => {
  const wrapper = wrap()
  expect(wrapper.contains('navbar')).toBe(true)
})

it('renders hero', () => {
  const wrapper = wrap({ hero: 'hero' })
  expect(wrapper.contains('hero')).toBe(true)
})

it('renders sponsor', () => {
  const wrapper = wrap({ sponsor: 'sponsor' })
  expect(wrapper.contains('sponsor')).toBe(true)
})

it('renders footer', () => {
  const wrapper = wrap()
  expect(wrapper.contains('footer')).toBe(true)
})
