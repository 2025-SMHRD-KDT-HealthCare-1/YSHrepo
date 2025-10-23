import React,{useState} from 'react'

const Ex03 = () => {

  // 1. 버튼 클릭시 내가 선택 숫자를 출력
  const [myNum, setNum]=useState();
  const [myNum1, setNum1]=useState();
  const [myNum2, setNum2]=useState();
  // 2. 버튼 클릭시 1~3사이 랜덤수 출력
  const ranNum = () => Math.floor(Math.random()*3)+1;
  // 3. 사용자가 클릭한 숫자와 랜덤수를 비교 후 결과 출력
const handleClick= (n) =>{
    setNum(n);
    const r =ranNum();
    setNum1(r);
    if(n === r) setNum2("정답");
    else setNum2("꽝")

    

}
  return (
    <div>
      
        <button onClick={()=>handleClick(1)}>1</button> 
        <button onClick={()=>handleClick(2)}>2</button>
        <button onClick={()=>handleClick(3)}>3</button>

        <div>
            <p>내가 입력한 숫자 : {myNum} </p>
            <p>컴퓨터 랜덤 숫자 : {myNum1}</p>
            <p>결과 :{myNum2}</p>
            {/* <p>결과 :{myNum == myNum1 ? "정답" : "땡"}</p> */}
        </div>

    </div>
  )
}

export default Ex03