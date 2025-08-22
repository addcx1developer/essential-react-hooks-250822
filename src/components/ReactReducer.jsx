import TaskManager from "./TaskManager"

export default function ReactReducer() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-8">
      <h1 className="text-3xl font-bold mb-6">Task Manager</h1>
      <TaskManager />
    </div>
  )
}