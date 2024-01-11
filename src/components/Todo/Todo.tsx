import React from 'react'
import { TodoType } from './Todo.type'

function Todo({ todo }: { todo: TodoType}) {
  return (
    <div data-testid="todoItem">
      <h3>{todo.name}</h3>
    </div>
  )
}

export default Todo