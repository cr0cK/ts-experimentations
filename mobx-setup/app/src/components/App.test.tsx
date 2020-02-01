import { render } from '@testing-library/react'
import * as React from 'react'
import App from './App'

it('renders learn react link', () => {
  const { getByTestId } = render(<App />)
  const linkElement = getByTestId('App')
  expect(linkElement).toBeInTheDocument()
})
