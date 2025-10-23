import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './assets/Menu'
import Member from './Member'

function App() {
  const [count, setCount] = useState(0)

  let temp = 'ice'
  // 객체 비구조화 할당
  let student = {
    name : '임승환',
    age : 20,
    sub : 'web'
  } 

  console.log(student)

  let { name, age, sub} = student
  console.log(name, age, sub) 


  return (
    <>
      <Menu temp={temp} menu="아메리카노" sale ="4100원" ></Menu>
      <Menu temp={temp}menu="카페라떼" sale = "4600원"></Menu>
      <Menu menu="에이드" sale = "5000원"></Menu>
      <hr></hr>
      <Member team="무한도전" name="유재석"></Member>
      <Member team="무한도전" name="박명수"></Member>
      <Member team="무한도전" name="정준하"></Member>
      <Member team="무한도전" name="정형돈"></Member>
    </>
  )
}


export default App
