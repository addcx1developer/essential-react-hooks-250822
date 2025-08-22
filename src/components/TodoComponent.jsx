import { useState } from "react"

export default function TodoComponent() {
  const [todoList, setTodoList] = useState([])
  const [todoInput, setTodoInput] = useState("")

  const handleAddTodo = () => {
    setTodoList((previousTodos) => [
      ...previousTodos,
      {
        id: Math.random(),
        text: todoInput
      }
    ])
    setTodoInput("")
  }

  const handleDeleteTodo = (id) => {
    setTodoList((previousTodos) => {
      return previousTodos.filter((todo) => todo.id !== id)
    })
  }

  return (
    <div>
      <input
        className="bg-white text-black"
        type="text"
        value={todoInput}
        onChange={(event) => setTodoInput(event.target.value)}
      />
      <button onClick={handleAddTodo}>
        Add Todo
      </button>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}