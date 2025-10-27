import React,{useState,useRef} from 'react'

const Ex07 = () => {
    const [ranNum , setRanNum] = useState(parseInt(Math.random()*50)+1)
    const [myNum, setMyNum] = useState(); 

    const inputRef = useRef();

    const [a, setA] = useState('');
    console.log(ranNum)

   

    const guess = () =>{
        let text = inputRef.current.value
        // ranNum == text ? setA("정답") : setA("땡")
        if(text>ranNum){
            setA('더 작은 값을 입력')
        }else if(text<ranNum){
            setA('더 큰 값을 입력')
        }else{
            setA('정답')
        
        }

        
    }


  return (
    <div>   
        <h1>1~50사이 랜덤 수 맞추기</h1>
        <input ref={inputRef}></input>
        <button onClick={guess}>추측</button>
        <p>결과 :{a}</p>
    </div>
  )
}

export default Ex07