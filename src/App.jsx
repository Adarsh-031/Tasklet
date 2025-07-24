import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)
  const isFirstLoad = useRef(true) // Track first render to fix refresh bug

  // Load from localStorage on initial mount
  useEffect(() => {
    getFromLS()
  }, [])

  // Save to localStorage when todos change (but skip first render)
  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false
      return
    }
    savetoLS()
  }, [todos])

  const handleInput = (e) => setTodo(e.target.value)

  const handleSave = () => {
    if (todo.trim() === "") {
      alert("Please enter a task")
      return
    }
    const newTodo = {
      id: uuidv4(),
      text: todo,
      completed: false
    }
    setTodos([...todos, newTodo])
    setTodo("")
  }

  const savetoLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const getFromLS = () => {
    const storedTodos = localStorage.getItem("todos")
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos))
    }
  }

  const handleEdit = (id) => {
    let t = todos.find((item) => item.id === id)
    if (t) {
      setTodo(t.text)
      setTodos(todos.filter((item) => item.id !== id))
    }
  }

  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
    setTodos(updatedTodos)
  }

  const handleShowToggle = () => {
    setShowFinished(!showFinished)
  }

  return (
    <>
      <Navbar />
      <div className='min-h-screen w-full px-4 sm:px-8 py-4 bg-violet-100'>
        <div className='max-w-2xl mx-auto'>
          <h1 className='text-center text-3xl sm:text-4xl font-bold mt-4 text-fuchsia-900'>Welcome to Tasklet</h1>
          <p className='text-center text-base sm:text-lg mt-2 text-fuchsia-700'>Get started by adding your first task Now!</p>

          <div className='flex flex-col sm:flex-row justify-center mt-6 sm:mt-10 gap-4 mb-8'>
            <input
              onChange={handleInput}
              value={todo}
              className="border border-violet-500 focus:border-violet-600 rounded-md px-3 py-2 flex-1 text-base"
              type="text"
              id="todo-input"
              placeholder="Enter a task"
            />
            <button
              onClick={handleSave}
              className="border border-b-neutral-900 bg-blue-400 rounded-md px-4 py-2 font-bold text-white hover:bg-blue-600"
            >
              Save
            </button>
          </div>

          <div className='flex items-center gap-2 mb-6'>
            <input
              type="checkbox"
              id="showcompleted"
              className='cursor-pointer'
              checked={showFinished}
              onChange={handleShowToggle}
            />
            <label htmlFor="showcompleted" className='text-base sm:text-lg text-purple-900'>Show Completed Tasks</label>
          </div>

          <h2 className='text-center font-bold text-2xl sm:text-3xl mb-4'>Your Tasks</h2>

          <div className='space-y-3'>
            {todos.map((item) => (
              (showFinished || !item.completed) &&
              <div key={item.id} className='flex flex-col sm:flex-row justify-between sm:items-center gap-2 p-4 bg-white shadow-md rounded-md'>
                <span className={`${item.completed ? 'line-through text-gray-500' : ''} text-base sm:text-lg`}>
                  {item.text}
                </span>
                <div className='flex flex-wrap gap-2 items-center'>
                  <button onClick={() => handleEdit(item.id)} className='font-semibold text-blue-500 hover:text-blue-700 text-sm sm:text-base'>Edit</button>
                  <button onClick={() => handleDelete(item.id)} className='font-semibold text-red-500 hover:text-red-700 text-sm sm:text-base'>Delete</button>
                  <div className='flex items-center gap-1'>
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={() => toggleComplete(item.id)}
                    />
                    <label className='cursor-pointer text-sm sm:text-base text-purple-900'>Mark as Done</label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
