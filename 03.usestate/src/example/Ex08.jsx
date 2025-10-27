import React from 'react'
import { useState } from 'react'

const Ex08 = () => {
    
    let imgArray =['./src/img/images (2).jpg','./src/img/images.jpg','./src/img/jo.jpg']
    
    const[pos, setPos] = useState(0)
    const[mySrc, setMySrc] = useState("./src/img/images (2).jpg")

    const chImg = () =>{
        if(pos==2){
            setPos(0)
        }else{
            setPos(pos+1)
        }

        // setMySrc('./src/img/images.jpg')
    }
    
    
    

  return (
    <div>
        <img src={imgArray[pos]}></img>
        <button>이전</button>
        <button onClick={chImg}>다음</button>
    </div>
  )
}

export default Ex08