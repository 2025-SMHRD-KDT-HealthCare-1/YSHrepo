import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home'
import About from './component/About'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Join from './component/Join'
import Login from './component/Login'

// Router: 주소 값에 따라 다른 컴포넌트를 출력하는 방법

// Route : 컴포넌트에 주소값을 대응 시키는 기능
// Routes : Route를 통해 사용한 주소값을 관리 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <BrowserRouter> */}
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/join' element={<Join></Join>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    {/* </BrowserRouter> */}
    </>
  )
}

export default App
