import { render, screen } from '@testing-library/react'
import App from './App'

it('should render App component', ()=> {
  render(<App />)
  const message = screen.queryByText(/Hello World/i)
  expect(message).toBeVisible()
})