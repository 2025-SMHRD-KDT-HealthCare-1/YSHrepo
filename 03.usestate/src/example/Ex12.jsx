import React, { useEffect,useState } from 'react'
import axios from 'axios';

const Ex12 = () => {
    const [movieList, setmovieList] = useState([]);

    // 3번 ComponentDidMount 시점(useEffect 훅 사용)에서 API Call
    useEffect(() => {
        /* 
            비동기 통신을 통해 데이터를 가져오자!
             => 생성자 위치(1번 위치), 렌더링 위치(2번 위치)에서는 가져오지 않는다!
             => useEffect 내에서 데이터를 가져온다
             => Event 위치에서도 데이터를 가져올 수 있다(onClick 등)
             
             1. fetch 함수
             - 장점 : 별도의 설치 X, JavaScript 자체 내장
             - 단점 : 기능이 단조로움, json 변환이 필수

             2. axios : 라이브러리
             - 장점 : 기능이 매우 다양, 기본적으로 제공하는 편의 기능이 풍부
        */
       const url = "https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";
       const key = "b254710305a4251fd9dfd3cb4d1da4d6";
       const targetDt = "20251028"

       // Case 1. fetch
       /* fetch(`${url}?key=${key}&targetDt=${targetDt}`,{
        method : "GET"
       })
       .then((res) => res.json())
       .then((data) =>{
        console.log(data);
        setmovieList(data.boxOfficeResult.dailyBoxOfficeList)
        }) */
        // Case 2. axios
        // 2-1. npm i axios
        //      : axios는 라이브러리이기 때문에 반드시 설치를 해야한 한다
        // 2-2. import axios from 'axios'
        //      : axios 라이브러리를 사용하기 위해서는 import가 필수
        axios.get(url,{
            params : {
                key, targetDt
            }
        }).then((res) => {
            console.log(res.data);
            setmovieList(res.data.boxOfficeResult.dailyBoxOfficeList)
        }).catch((err) => console.error(err));
    }, []);


  return (
    <div>
        <h1>일간 영화 순위</h1>
        <table border ="1">
            <thead>
                <tr>
                    <th>순위</th>
                    <th>제목</th>
                    <th>개봉일</th>
                </tr>
            </thead>
            <tbody>
                {movieList.map((item,index) =>(
                <tr key ={index}>
                    <td>{item.rank}</td>
                    <td>{item.movieNm}</td>
                    <td>{item.openDt}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default Ex12