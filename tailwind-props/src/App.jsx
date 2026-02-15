import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Devang",
    age: 23
  }

  return (
    <>
      <h1 className='bg-amber-600 text-black rounded-xl p-4'>Chai is ready!</h1>
      <Cards channel="chaiaurReact" someObj = {myObj} />
    </>
  )
}

export default App