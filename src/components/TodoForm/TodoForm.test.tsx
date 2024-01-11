import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodoForm from './TodoForm'

describe('form inputs', ()=> {

  const setup = ()=> render(<TodoForm />)

  it('should have an add input', ()=> {
    setup()
    const addInput = screen.getByPlaceholderText('Add a todo')
    expect(addInput).toBeInTheDocument()
  })

  it('should have an add todo button', ()=> {
    setup()
    const addInput = screen.getByRole('button')
    expect(addInput).toBeInTheDocument()
  })
})

describe('actions', ()=> {

  const setup = ()=> render(<TodoForm />)

  it('should not show todo item before submit', ()=> {
    setup()
    const todoItem = screen.queryByTestId('todoItem')
    expect(todoItem).not.toBeInTheDocument()
  })

  it('should disable submit button in no todo text', ()=> {
    setup()
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

  it('should display a todo after submit and disable button', async ()=> {
    
    setup()
    const button = screen.getByRole('button')
    const addInput = screen.getByPlaceholderText('Add a todo')
    await userEvent.type(addInput, 'New todo')
    expect(button).not.toBeDisabled()
    await userEvent.click(button)

    const todoText = screen.getByText('New todo')
    const todoItem = screen.queryByTestId('todoItem')
    expect(todoItem).toBeInTheDocument()
    expect(todoText).toBeInTheDocument()
    expect(button).toBeDisabled()
  })
})