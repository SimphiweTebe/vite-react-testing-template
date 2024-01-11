import { useState } from 'react'
import Todo from '../Todo/Todo'
import { TodoType } from '../Todo/Todo.type'
import styles from './styles.module.scss'

function TodoForm() {
  const [todoItem, setTodoItem] = useState('')
  const [todos, setTodos] = useState<TodoType[]>([])

  const [isDisabled, setIsDisabled] = useState(true)
  
  const addTodo = ()=> {
   if (todoItem) {
    const newTodo = {
      id: Date.now(),
      name: todoItem,
      completed: false
    }

    setTodos([...todos, newTodo])
    setTodoItem('')
    setIsDisabled(true)
   }
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>)=> {
    const { value } = event.currentTarget
    if(value.trim() !== '') {
      setTodoItem(event.currentTarget.value)
      setIsDisabled(false)
    }
  }

  return (
    <>
    <div className={styles.formWrapper}>
      <input type="text" placeholder='Add a todo' onChange={handleChange} value={todoItem}/>
      <button onClick={addTodo} disabled={isDisabled}>Add</button>
    </div>
    {
      todos?.map((todo) => <Todo todo={todo} key={todo.id} />)
    }
    </>
  )
}

export default TodoForm