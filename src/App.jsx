import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ArrayManipulation } from './components/ArrayManipulation'
import { StringManipulation } from './components/StringManipulation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello World</h1>
    <ArrayManipulation/>
    <StringManipulation/>
    </>
  )
}

export default App
