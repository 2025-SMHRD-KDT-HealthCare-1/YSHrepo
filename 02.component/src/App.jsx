import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './assets/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu menu="아메리카노" sale ="4100원" ></Menu>
      <Menu menu="카페라떼" sale = "4600원"></Menu>
    </>
  )
}


export default App
