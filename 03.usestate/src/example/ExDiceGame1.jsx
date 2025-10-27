import React, { useState } from 'react';

const ExDiceGame1 = () => {
  const imgArray = [
    "./src/img/dice1.png",
    "./src/img/dice2.png",
    "./src/img/dice3.png",
    "./src/img/dice4.png",
    "./src/img/dice5.png",
    "./src/img/dice6.png"
  ];

  const [userDice, setUserDice] = useState(0);
  const [comDice, setComDice] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [comScore, setComScore] = useState(0);
  const [result, setResult] = useState("");

  const ranDice = () => Math.floor(Math.random() * 6); // 0~5 랜덤

  const handleStart = () => {
    // 주사위 랜덤 값
    const newUser = ranDice();
    const newCom = ranDice();

    setUserDice(newUser);
    setComDice(newCom);

    // 점수 비교
    if (newUser > newCom) {
      setUserScore(prev => {
        const updated = prev + 1;
        if (updated === 10) setResult("🎉 User 승리!");
        return updated;
      });
    } else if (newUser < newCom) {
      setComScore(prev => {
        const updated = prev + 1;
        if (updated === 10) setResult("🤖 Com 승리!");
        return updated;
      });
    }

    if (newUser === newCom) {
      setResult("😅 무승부!");
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>🎲 DICE GAME 🎲</h1>
      <button 
        onClick={handleStart} 
        disabled={userScore >= 10 || comScore >= 10}
        style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }}
      >
        Start
      </button>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
        <div style={{ margin: '20px' }}>
          <img src={imgArray[comDice]} width="100" alt="com dice" />
          <h2>Com Score : {comScore}</h2>
        </div>

        <div style={{ margin: '20px' }}>
          <img src={imgArray[userDice]} width="100" alt="user dice" />
          <h2>User Score : {userScore}</h2>
        </div>
      </div>

      <h1 style={{ color: 'green' }}>결과 : {result}</h1>
    </div>
  );
};

export default ExDiceGame1;
