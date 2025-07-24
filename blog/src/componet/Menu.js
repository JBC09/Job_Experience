import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './menu.css';

function Menu1(){

  
  const today = new Date();
  const bar = document.querySelectorAll(".bar");


  let [dates,setDates] = useState([]);
  let error;
  useEffect(
    function getData(){
      fetch("https://jobexp.gbsw.hs.kr/api/application/date")
      .then((res) => res.json())
      .then((data) => {

        setDates(data.data);

        error = document.querySelectorAll('.error');
      })}
      
  ,[])


  function errors(){
    alert('정원이 꽉 찼거나 신청 기한이 지났습니다.');
  }
  function ok(){
    return;
  }


  return(
      
    <div>
       <div id='menu1'>
      <section>
        <p>{today.getFullYear()+1}학년도 신입생을 위한</p>
        <h1>경북소프트웨어고등학교</h1>
        <h1>입학설명회 및 중학생 진로체험</h1>
      </section>
    </div>


    <div id='menu2'>
       

       <div className='진로'>
           <img id='진로_img' src="img/menu2_icon.png"></img>
           <h2>진로체험 운영 안내</h2>
           
           <p>경북소프트웨어고등학교 중학생 진로체험은 <span>토요일</span>에 실시되며, <br></br>           
               <span>중학생 진로체험과 학부모 입학안내 및 특강</span>이 동시에 운영됩니다. <br></br>  
               중학생 진로체험 주제는 고등학교 입학 전 <br></br>
                IT 신기술 체험과 코딩 교육으로 이루어질 예정이며,  <br></br>  
               진로체험과 학부모 안내가 모두 끝나면 학교 투어를 진행해  <br></br>  
               학생들이 생활하는 교실 및 실습실, 기숙사 생활 환경을 탐방하게 됩니다.</p>
       </div>
       
       <div className="진로">
       
             <img src='img/menu2_icon2.png'></img>
             <h2>입학설명회 및 중학생  <br></br>진로체험 신청하기</h2>
       
          <p>
          경북소프트웨어고등학교 중학생 진로체험은 총 5회차까지 실시됩니다.<br></br>
       
       해당 회차의 신청기간이 끝난 후 2일 이내 선정 문자를 발송해드립니다.<br></br>
          </p>
       </div>
       
       </div>

       
      <div id='menu3'>
        
        <div id='접수날짜'>
          <h1>접수 날짜</h1>
         <div id="check">
            {
                  dates.map((date)=>(
                    <p><span>{date.name}</span><br></br>{date.deadlineDatetime} 까지</p>
                  ))        
            }
      
         </div>

          <h1 id='신청하기'>신청하기 <sub>희망하는 일자를 클릭하세요!</sub></h1>
            <div id='신청box'>
                {
                    dates.map((date)=>(
                      <div className='boxs' onClick={(date.isEnd || date.isMax) ? errors : ok}><Link  to={(date.isEnd || date.isMax) ? "/" : `/application/${date.code}`} style={{ textDecoration: "none" ,color:"white"}}> <span>{ date.name }</span> <br/>{date.date}</Link></div>  
                    ))
                   
                }
                
            </div>
        </div>
        <div className='이미지_글'>
          <h1>홈페이지</h1>
          <img src="img/person.png"></img>
          <p>학교에 관한 정보를 알고 싶으시다면?</p>
          <a href="http://school.gyo6.net/gbsw"> 알아보러가기</a>
          
        </div>
        <div className='이미지_글'>
          <h1>입시설명회</h1>
        <img src="img/school.png"></img>
          <p><div id='소개글'>
            <span>찾아가는</span> 권역별 입학설명회  <br></br>
            어디에서? <span>안동, 구미, 포항, 대구</span> 권역별 <br></br>
            언제? <span> 2023. 09. 09.(토)</span> <br></br> 자세한 사항은 추후 <span>홈페이지</span>를 통해 안내드립니다. <br></br>
            </div></p>
     
        </div>
        <div id='menu3_img'>
            
            <div className='box'><img src='img/직업체험.png'></img>
              <h1>직업체험</h1>
              <p>학교에서 수업하는 내용을 <br></br> 직접 체험할 수 있습니다.</p>
            </div>
            <div className='box'><img src="img/기숙사투어3.jpg"></img>
              <h1>기숙사투어</h1>
              <p>학생들이 머무르는 곳인 <br></br>기숙사를 직접 들어다 볼 수 있습니다.<br></br></p>
            </div>
            <div className='box'><img src="img/일정2.png"></img>
              <h1>프로그램</h1>
              <p>진로체험의 프로그램 내용 및 시간</p>
            </div>
            <div className='box'> <img src="img/권역별입시설명회3.jpg"></img>
              <h1>입시설명회</h1>
              <p>여러 지역에서 실시하는 <br></br> 학교 입시설명회</p>
            </div>
        </div>
       
      </div>
    </div>
  
  
  )
}

export default Menu1;