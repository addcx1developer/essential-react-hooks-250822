import CountComponent from "./CountComponent"
import TodoComponent from "./TodoComponent"

export default function ReactState() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-12">How Does State Really Work In React.js?</h1>
      <CountComponent />
      <CountComponent />
      <CountComponent />
      <CountComponent />
      <CountComponent />
      <CountComponent />
      <TodoComponent />
    </div>
  )
}