import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/addTodo'

function App() {
  
  return (
    <>
      <h1 className='underline p-4 font-bold text-xl '  >Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App