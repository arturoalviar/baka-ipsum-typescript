import React from 'react'
import { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Button from '../components/Button'

describe('Button', () => {
  it('renders and matches button to snapshot', () => {
    const button = shallow(<Button />)
    expect(toJSON(button)).toMatchSnapshot()
  })

  it('runs a method when clicked', () => {
    const clickFunc = jest.fn()
    const button = mount(<Button onClick={clickFunc} />)
    button.find('button').simulate('click')

    expect(clickFunc).toHaveBeenCalled()

    button.unmount()
  })
})
