import React from 'react'
import { useState } from 'react';
// React에서는 일반 변수가 있고 state 변수가 따로 있다 
// State 변수 : 바뀐 값으로 출력할 수 있는 변수
//             -> useState를 통해서 만들 수 있다. -> import 

const ExNumber = () => {
    let num = 0;
    const [number , setNumber] = useState(0);
    // number : State 값을 가지는 변수
    // setNumber : state 값을 바꿀 수 있는 함수

    const plus =( ) =>{
        num++
        console.log(num)
        // number++
        //number=number+1
        setNumber(number+1)
        // number라는 state값을 바꾼다 
        // --> 바뀐 값으로 출력하겠다
        // --> ExNumber(현재 컴포넌트)를 재실행 시킨다. -> 일반 변수는 초기 값으로 돌아감

        // setState 함수 특징 : close 함수 이다.
        console.log(number)
        // number=number+1

        ////setNumber
    }
  return (
    <div>
        <h1>{number}</h1>
        <button onClick={plus}>더하기</button>
    </div>
  )
}

export default ExNumber