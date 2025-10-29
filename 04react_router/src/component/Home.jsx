import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Home Page 입니다.</h1>
        {/* <a href='/about'>about 이동</a> */}
        <br></br>
        {/* 리액트에서는 a태그보다 Link 컴포넌트를 사용하는것을 권장한다. */}
        <Link to='/about'>about 이동 Link</Link>
        <br></br>
        <Link to='/join'><button>join으로 이동하기</button></Link>
    </div>
  )
}

export default Home