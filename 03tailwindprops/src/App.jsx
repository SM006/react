import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-blue-950 text-white p-4 rounded-xl'> Tailwind Test</h1>
      <Card model='Rolls Future' btnText='View Rolls Royce'/>
      <Card model='Jaguar Future' btnText='View Jaguar' />
    </>
  )
}

export default App
