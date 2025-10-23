import React,{useState} from 'react'
// state : 바뀐 값으로 출력하기 위해서 사용한다!!!
// React Hooks : 기존 함수 컴포논트에서 할 수 없었던
//  다양한 작업을 할 수 있게 도와주는 기술


const Ex01 = () => {
    let num = 0;
    // useState 사용하기
    const [ num2, setNum2] = useState(0)
    // [ state 변수, state를 변하게끔 하는 함수 ] = useState(초기값)

    // 증가, 감소 한수 만들기 
    const increase = () =>{
        console.log('증가')
        num = num+1
        console.log(num)
        setNum2(num2 + 1)
    }

    const decrease = () =>{
        console.log('감소')
        if(num2>0){
        num = num-1
        console.log(num)
        setNum2(num2 - 1)}

    }
  return (
    <div>
        <div>
            {num2}
            <br></br>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
        </div>
        
    </div>
  )
}

export default Ex01