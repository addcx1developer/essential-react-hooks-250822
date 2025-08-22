import { useState } from "react"

export default function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build a Project", completed: true }
  ])

  const [newTaskTitle, setNewTaskTitle] = useState("")
  const [editTaskId, setEditTaskId] = useState(null)
  const [editTaskTitle, setEditTaskTitle] = useState("")

  const addTask = () => {
    if (newTaskTitle.trim() === "") return
    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      completed: false
    }
    setTasks((prev) => [...prev, newTask])
    setNewTaskTitle("")
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const toggleTaskCompletion = (id) => {
    setTasks((prev) => {
      return prev.map((task) => {
        return task.id === id ? { ...task, completed: !task.completed } : task
      })
    })
  }

  const startEditing = (id, title) => {
    setEditTaskId(id)
    setEditTaskTitle(title)
  }

  const saveEdit = () => {
    setTasks((prev) => {
      return prev.map((task) => {
        return task.id === editTaskId ? { ...task, title: editTaskTitle } : task
      })
    })
    setEditTaskId(null)
    setEditTaskTitle("")
  }

  return (
    <>
      {/* Add Task */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Add Task</h2>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="New task title"
            className="px-4 py-2 rounded bg-gray-800 text-gray-200 focus:outline-none"
          />
          <button
            onClick={addTask}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
          >
            Add Task
          </button>
        </div>
      </div>

      {/* Task List */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Task List</h2>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between bg-gray-800 p-4 rounded"
            >
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                {editTaskId === task.id ? (
                  <input
                    type="text"
                    value={editTaskTitle}
                    onChange={(e) => setEditTaskTitle(e.target.value)}
                    className="px-4 py-2 rounded bg-gray-700 text-gray-200 focus:outline-none"
                  />
                ) : (
                  <span
                    className={`${
                      task.completed ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {task.title}
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-4">
                {editTaskId === task.id ? (
                  <button
                    onClick={saveEdit}
                    className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => startEditing(task.id, task.title)}
                    className="px-4 py-2 bg-yellow-600 rounded hover:bg-yellow-700"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => deleteTask(task.id)}
                  className="px-4 py-2 bg-red-600 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}