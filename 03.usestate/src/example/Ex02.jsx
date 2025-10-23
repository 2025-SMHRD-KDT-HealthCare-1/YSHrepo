import React, {useState} from 'react'
import pic from '../img/images.jpg'


const Ex02 = () => {
    // useState의 초기값은 다양한 데이터 자료형이 가능
    const [ likeEmoji, setLikeEmoji] = useState("♡")
    const [likeNum, setLikeNum] = useState(0)

    // 빈 하트 클릭 시, => 채워진 하트로 변경
    // 빈 하트 클릭 시, => 숫자 0을 1로 변경
    // 채워진 하트 클릭 시 => 빈 하트로 변경
    // 채워진 하트 클릭 시 => 숫자를 1을 0으로 변경
    const handleLike = () =>{
        // 클릭 했을 때 비어있는 하트라면 (조건문) 
        if(likeEmoji =="♡"){
            setLikeEmoji("♥")
            setLikeNum(+1)     
        }
        else{
            setLikeEmoji("♡")
            setLikeNum(0)
        }
    }

  return (
    <div>
        {/* src폴더 내 접근 */}
        {/* import 이미지변수 from '경로' */}
        <img width='300px' src={pic}></img>
        {/* 외부주소값 접근 */}
        <img width="300px" src='https://archive.myvibrary.com/original/1669449908233_27bccb5c7a.jpeg'></img>
        <br></br>
        {/* public 폴더에 이미지가 있다면?
            http://localhost:5173/img/image1.jpg
            public폴더는 서버와 통신 중=> 이곳에 저장하는 것 만으로도 고유한 주소 값이 생김 */}
        <img width="300px" src='/img/image1.jpg'></img>
        <br />
        <p>
            <span onClick={handleLike}>{likeEmoji}</span>
            <span>{" "} 좋아요{likeNum}개</span>
        </p>
    </div>
  )
}

export default Ex02