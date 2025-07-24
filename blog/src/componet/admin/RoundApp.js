import { useRef } from "react";
import './RoundApp.css';
import { useNavigate } from "react-router-dom";


function RoundApp(){
  const navigate = useNavigate();
  const dateRef = useRef(null);
  const maxPeopleRef  = useRef(null);
  const placeRef  = useRef(null);
  const deadlineDatetimeRef  = useRef(null);
  const nameRef = useRef(null);


  function add(){
  
    fetch("https://jobexp.gbsw.hs.kr/api/application/date",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:nameRef.current.value,
        date: dateRef.current.value,
        maxPeople:maxPeopleRef.current.value,
        place:placeRef.current.value,
        deadlineDatetime:deadlineDatetimeRef.current.value,
      })
    })
    .then((res) => res.json())
    .then((data) =>{
       
          if(data.success){
            alert('정상적으로 회차가 등록되었습니다.');
            navigate('/admin/appList');
          }
          else{
            alert('등록되지 않았습니다.');
      
          }
    })
  }
  return(
    <div id="RoundApp">
        <h1>회차등록</h1>
        <label> 회차날짜: <input type="date" ref={dateRef}></input></label>
        <label> 회차이름: <input type="text" ref={ nameRef} placeholder="회차이름"></input></label>
        <label> 최대인원: <input type="number" ref={maxPeopleRef} placeholder="0" ></input>명</label>
        <label> 회차장소: <input type="text" ref={placeRef} placeholder="회차 장소"></input></label>
        <label> 마감날짜: <input type="datetime-local" ref={deadlineDatetimeRef} ></input></label>
        <label id="go"><p onClick={add}>제출</p></label>
    </div>
  )
}

export default RoundApp;