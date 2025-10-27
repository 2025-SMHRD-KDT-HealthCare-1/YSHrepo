import React from 'react'
import { useState } from 'react';

// 정 안될때 사용하는 변수
let comScore2 = 0;
let userScore2 =0;

const ExDiceGame = () => {
  // 1. 버튼 클릭시 주사위 이미지 랜덤하게 변경(둘다)
  let imgArray=[
    "./src/img/dice1.png",
    "./src/img/dice2.png",
    "./src/img/dice3.png",
    "./src/img/dice4.png",
    "./src/img/dice5.png",
    "./src/img/dice1.png"]

  // let num = 6
  const [userDice, setUserDice] = useState(1);
  const [comDice, setComDice] = useState(1);

  const [result, setResult] = useState(" ")

  const startGame=()=>{
    let ranDice = parseInt(Math.random()*6)+1;
    setComDice(ranDice)

    let userRanDice = parseInt(Math.random()*6)+1;
    setUserDice(userRanDice)

    if(ranDice > userRanDice){
      setComScore(comScore+1)
      comScore2 = comScore+1;
    }
    else if(userRanDice>ranDice){
      setUserScore(userScore+1)
      userScore2 = userScore+1;
    }

    ///
    if(comScore2==10){
      setResult('cum win')
    }
    else if(userScore2==10){
      setResult('user win')
    }
  }

  const [userScore, setUserScore] = useState(0);
  const [comScore, setComScore] = useState(0);
  
  let comScore2 = 0;
  // 2. 주사위의 숫자를 비교> 더큰 Score 값을 +1 증가
  // 3. Score값이 먼저 10에 도달한 결과를 출력
  //  >>>"User승리" or "com 승리"


  return (
    <div>
      <h1>DICE GAME</h1>
      <button onClick={startGame}>Start</button>

      <div >
        <img src={'./src/img/dice'+comDice+'.png'}></img>
        <h1>Com Score : {comScore}</h1>
      </div>
      <div >
        <img src={'./src/img/dice'+userDice+'.png'}></img>
        <h1>User Score : {userScore}</h1>
      </div>

      <h1>결과 : {comScore>userScore? comScore==10? "com 승리":"" :false}</h1>
    </div>
  )
}

export default ExDiceGame