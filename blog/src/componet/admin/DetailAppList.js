import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './DetailAppList.css';

export default function DetailAppList(props){

  let { id } = useParams();
  let [DetailDatas,SetDetailDatas] = useState([]);
 

  useEffect(
    function getData(){
      fetch(`https://jobexp.gbsw.hs.kr/api/application/searchByDate/${id}`)
      .then((res) => res.json())
      .then((data) =>{
        SetDetailDatas(data.data);
    
        

      });
    }
  ,[id])

  return(

    <div id="DetailMain">
      <h1>{id}회차 신청목록</h1>
      <div id="DetailWrap">
        {
          
          DetailDatas.map((data,idx)=> (
              <div id="Detail" onClick={() => {
                props.setData(data);
              }}>
                <h2>순서: {idx+1}번</h2>
                <h2>이름: {data.name}</h2>
                <h2>학교: {data.school}</h2>
              </div>
          ))}

       </div>
       
    </div>
  )
}