import { useState } from "react"

export default function TodoComponent() {
  const [todoList, setTodoList] = useState([])
  const [todoInput, setTodoInput] = useState("")

  const handleAddTodo = () => {
    setTodoList((previousTodos) => [
      ...previousTodos,
      todoInput
    ])
    setTodoInput("")
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
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}