import { render, screen } from '@testing-library/react'
import App from './App'

it('should render App container', ()=> {
  render(<App />)
  const appContainer = screen.getByTestId('container')
  expect(appContainer).toBeInTheDocument()
})