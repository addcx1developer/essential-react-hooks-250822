import { useState } from "react"

export default function CountComponent() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount((previousCount) => previousCount + 1)
  }

  return (
    <button
      onClick={handleIncrement}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded mb-8 text-2xl"
    >
      Count: {count}
    </button>
  )
}