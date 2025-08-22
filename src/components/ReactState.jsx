let count = 0;

export default function ReactState() {
  const handleIncrement = () => {
    count += 1 // Increment the count variable
    console.log(count) // The console will show the updated value
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-12">How Does State Really Work In React.js?</h1>

      <button
        onClick={handleIncrement}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded mb-8 text-2xl"
      >
        Count: {count}
      </button>
    </div>
  )
}