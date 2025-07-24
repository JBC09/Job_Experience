
import { useState,useEffect } from 'react';
import './AppList.css';
import { Link } from 'react-router-dom';

function AppList(){
    const handleCopyClipBoard = (text) => {
      try {
        navigator.clipboard.writeText(text);
        alert('클립보드에 복사되었습니다.');
      } catch (error) {
        alert('클립보드 복사에 실패하였습니다.');
      }
    };

  const excelDownloader = (text) => {
    try {
     
        window.open(text);  

      alert('엑셀이 다운로드 되었습니다.');
    } catch (error) {
      alert('클립보드 복사에 실패하였습니다.');
    }
  };







  let [datas,SetDatas] = useState([]);
  useEffect(
      function getData(){
        fetch("https://jobexp.gbsw.hs.kr/api/application/date")
        .then((res) => res.json())
        .then((data) =>{
         

          SetDatas(data.data);
        });
      }
    ,[])
      function deleteRound(e){
        let check = window.confirm(`${e.target.id}회차를 삭제하시겠습니까?`)
        
        if(check){
          fetch("https://jobexp.gbsw.hs.kr/api/application/date",{
          method:"DELETE",
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
              code: e.target.id,
          })
        })
        .then((res) => res.json())
        .then((data) => {
          if(data.success){
              document.getElementById(e.target.id+"box").style.display = "none";
             
          }
       
          alert('삭제가 정상적으로 완료되었습니다.');
        })
        }
        else{
          alert('삭제하지 않았습니다.');
        }
      }


  return( 
    <div id='AppList'>
        {
          
            datas.map((data)=>(
              <div className='box' id={data.code+'box'}>
                  <img className='delete' id={data.code} onClick={deleteRound} src="../img/delete.png"></img>
                  <img src="../img/copy.png" className='copy' onClick={() => handleCopyClipBoard(`https://jobexp.gbsw.hs.kr/application/${data.code}`)}></img>
                  <img src="../img/excel.png" className='excel' onClick={() => excelDownloader(`https://jobexp.gbsw.hs.kr/api/application/excel/${data.code}`)}></img>
               
                  <h3 id='round'>{data.name}</h3>
                  <ul>
                    <li>이름: {data.name}</li>
                    <li>날짜: {data.date}</li>
                    <li>마감일: {data.deadlineDatetime}</li>
                    <li>현재인원: {data.count}명</li>
                    <li>최대인원: {data.maxPeople}명</li>
                    <li>장소: {data.place}</li>
                    <li>인원상태: <span id={ data.isMax ? "red" : "blue" }>{ data.isMax ? "만석" : "공석"  }</span></li>
                    <li>마감상태: <span id={ data.isEnd ? "red" : "blue"  }>{ data.isEnd ? "완료" : "미완료"  }</span></li>
                  </ul>
                  <Link id='click' to={ `/admin/appList/${data.code}` }>{data.code}회차 신청목록</Link>
              </div>  
              
            ))
        
            
        }
      
       
    </div>
  )
}

export default AppList;