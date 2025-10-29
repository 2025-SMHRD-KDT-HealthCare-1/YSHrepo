import React, { useRef, useState } from 'react'
import {Link , useNavigate} from 'react-router-dom'

const Login = () => {

  const nav = useNavigate();

  const [inputID,setInputID] = useState('');
  const [inputPW,setInputPW] = useState('');
  const Next=()=>{
    inputID
    inputPW
    if(inputID=='smhrd'&& inputPW=='123'){
      nav('/')
    }else if(inputID !='smhrd' &&  inputPW !='123'){
      alert("잘못입력하였습니다")
    }
  }
  // 사용자가 입력한 ID : smhrd , PW : 123
  // 일때만 Home으로 이동
  //  둘중 하나라도 다르다면 알림창 '잘못입력하였습니다' 알림 출력
  return (
    <div>
        <h1>즐거운 React수업</h1>
        ID: <input onChange={(e)=>setInputID(e.target.value)}></input>
        <br></br>
        PW: <input onChange={(e)=>setInputPW(e.target.value)}></input>
        <br></br>
        <button onClick={Next}>로그인 시도</button>
        {/* <Link to ='/'><button>로그인 시도</button></Link> */}
    </div>
  )
}

export default Login