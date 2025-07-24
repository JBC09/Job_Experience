import { Link, useParams } from 'react-router-dom';
import './form.css';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';


let title = "";
function Form(){

  const navigate = useNavigate();
  const [people,setPeople] = useState(-1);
  const [grade,setGrade] = useState(0);
  const [depart,setDepart] = useState(0);
  const [way,setWay] = useState(0);
  const { dateCode } = useParams();
  const form_ok = document.getElementById('form_ok');


  const schoolRef = useRef(null);
  const regionnRef = useRef(null);
  const regionnRef2 = useRef(null);
  const nameRef = useRef(null);
  const studentTelRef = useRef(null);
  const parentTelRef = useRef(null);
  const questionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch("https://jobexp.gbsw.hs.kr/api/application/date")
    .then((res) => res.json())
    .then((data) =>{
      console.log(data);
      SetDatas(data.data);
      data.data.forEach((dataa)=>{
        if(dataa.code == dateCode){
            title = dataa.name;
            document.getElementById('title').textContent = title;
        }
      }) 
    })

  }, []);

  function changePeople(e){
    setPeople(e.target.value);
  }

  function changeGrade(e){
    setGrade(e.target.value); 
  }

  function changeDepart(e){
    setDepart(e.target.value);
  }

  function changeWay(e){
    setWay(e.target.value);
  }

  const [datas,SetDatas] = useState();


  function applications(){
   
        datas.forEach((data)=>{
      
          if(data.code == dateCode){
             
              if(data.isMax && data.isEnd){
                
                alert('정원이 꽉 찼거나 신청기한이 지났습니다.');
                return;
              }
          }
    
      })
    
    
   
     


  


    if(!form_ok.checked){
      alert('동의되지 않았습니다.');
      return;
    }
    if(schoolRef.current.value == ""){
      alert('학교이름을 작성하지 않았습니다.');
      return;
    }
    if(regionnRef.current.value == ""){
      alert('학교위치를 작성하지 않았습니다.');
      return;
    }
    if(grade == 0){
      alert('학년을 작성하지 않았습니다.');
      return;
    }
    if(nameRef.current.value == ""){
      alert("이름을 작성하지 않았습니다.");
      return;
    }
    if(studentTelRef.current.value == ""){
      alert("학생의 연락처를 작성하지 않았습니다.");
      return;
    }
    if(parentTelRef.current.value == ""){
      alert("부모님의 연락처를 작성하지 않았습니다.");
      return;
    }
    if(depart == 0){
      alert('학과를 작성하지 않았습니다.');
      return;
    }
    if(way == 0){
      alert("알게된 경로를 작성해주세요.");
    }
    if(people == -1){
      alert("동반자의 수를 체크하지 않았습니다.");
    }
    fetch("https://jobexp.gbsw.hs.kr/api/application/save",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          roundCode: dateCode,
          school:schoolRef.current.value,
          grade:grade,
          region1:regionnRef.current.value,
          region2:regionnRef2.current.value,
          name:nameRef.current.value,
          studentTel:studentTelRef.current.value,
          parentTel:parentTelRef.current.value,
          depart:depart,
          question:questionRef.current.value,
          way:way,
          people:people,
          status: 'Y'
      })  
    })
    .then((res) => res.json())
    .then((data) =>{
   
      if(data.success){
        alert('신청이 정상적으로 되었습니다.');
        navigate('/');
      
      }
      else{
        if(data.status == 210){
          alert("정원초과입니다.");
        }
        
      }
    })
  }

  return(
    <div id="form">
      <h1><span id='title'>설명회</span> <br></br>경북소프트웨어고등학교 행사 참가 신청서</h1>
        <form>
          <table>
              <tr>
                <th>참여 학생의 학교 이름<p> (예: OO중학교)</p> </th>
                <td>
                  <input type='text' placeholder='중학교 이름을 입력하세요.' ref={schoolRef}></input>
                </td>
              </tr>

              <tr>
                <th>학교가 위치한 지역 </th>
                <td>
                  <select ref={regionnRef}>
                      <option value={"서울특별시"}>서울특별시</option>
                      <option value={"부산광역시"}>부산광역시</option>
                      <option value={"대구광역시"}>대구광역시</option>
                      <option value={"인천광역시"}>인천광역시</option>
                      <option value={"광주광역시"}>광주광역시</option>
                      <option value={"대전광역시"}>대전광역시</option>
                      <option value={"울산광역시"}>울산광역시</option>
                      <option value={"세종특별자치시"}>세종특별자치시</option>
                      <option value={"경기도"}>경기도</option>
                      <option value={"강원도"}>강원도</option>
                      <option value={"충청북도"}>충청북도</option>
                      <option value={"충청남도"}>충청남도</option>
                      <option value={"전라북도"}>전라북도</option>
                      <option value={"전라남도"}>전라남도</option>
                      <option value={"경상북도"}>경상북도</option>
                      <option value={"경상남도"}>경상남도</option>
                      <option value={"제주특별자치도"}>제주특별자치도</option>
                  </select>


                <input id="region2" type='text' placeholder='시 / 군'  ref={regionnRef2}></input>
                </td>
              </tr>

              <tr>
                <th>학생의 학년
                
                </th>
                <td id='grade_flex'>
                    <label><p>1학년 </p><input type='radio' name='grade' value={1} onClick={changeGrade}></input></label>
                    <label><p>2학년 </p> <input type='radio' name='grade' value={2} onClick={changeGrade}></input></label>
                    <label><p>3학년 </p><input type='radio' name='grade' value={3} onClick={changeGrade}></input></label>
                </td>
              </tr>

              <tr>
                <th>학생의 이름
                
                </th>
                <td>
                  <input type='text' placeholder='참여 학생의 이름을 입력하세요.'  ref={nameRef}></input>
                </td>
              </tr>

              <tr>
                <th>학생 연락처
                    <p>(예: 010-3333-4444)</p>
                </th>
                <td>
                  <input type='text' placeholder='참여 학생의 연락처를 입력하세요.'  ref={studentTelRef}></input>
                </td>
              </tr>

              <tr>
                <th>학부모 연락처
                    <p>(예: 010-5555-6666)</p>
                </th>
                <td>
                  <input type='text' placeholder='학부모님의 연락처를 입력하세요.' ref={parentTelRef}></input>
                </td>
              </tr>
            
          </table>
          
          <table>
          <tr>
                <th className='진학'>관심있는 학과

                </th>
                <td className='진학'>
                  <div id="grade_flex">
                    <label>소프트웨어개발과<input type='radio' name='class' value={"소프트웨어개발과"} onClick={changeDepart}></input></label>
                    <label>미정<input type='radio' name='class' value={"미정"} onClick={changeDepart}></input></label>
                    <label>인공지능개발과<input type='radio' name='class' value={"인공지능개발과"} onClick={changeDepart}></input></label>
                    <label>게임개발과<input type='radio' name='class' value={"게임개발과"} onClick={changeDepart}></input></label>
              
                  </div>
                </td>
              </tr>

             

              <tr>
                <th id="경로">행사를 알게 된 경로
                </th>
                <td >
                    <div id='경로check'>
                        <label><input type='radio' name='way' onClick={changeWay} value={"담임 선생님"}></input>담임 선생님 소개</label>
                        <label><input type='radio' name='way' onClick={changeWay} value={"진로 선생님"}></input>진로 선생님 소개</label>
                        <label><input type='radio' name='way' onClick={changeWay} value={"정보 선생님"}></input>정보 선생님 소개</label>
                        <label><input type='radio' name='way' onClick={changeWay} value={"학교 홈페이지"}></input>학교 홈페이지를 통해</label>
                        <label><input type='radio' name='way' onClick={changeWay} value={"주변 지인"}></input>주변 지인의 소개</label>
                    </div>
                </td>
              </tr>

              <tr>
                <th>학생 외 참석인원
                </th>
                <td id='member'>
                  
                        <label><input type='radio' name='people' value={1} onClick={changePeople} ></input>1명</label>
                        <label><input type='radio' name='people' value={2} onClick={changePeople}></input>2명</label>
                        <label><input type='radio' name='people' value={3} onClick={changePeople}></input>3명</label>
                  
                </td>
              </tr>


              <tr>
                <th >기타 질의 사항
                </th>
                <td >
                  <textarea  placeholder='내 답변...' ref={questionRef} rows="4dsadad" cols={"50"}>

                  </textarea>
                </td>
              </tr>


              <tr>
                <th>
                개인정보 수집 동의
                </th>
                <td >
                    <div id='info'>
                        <p> 신청자는 개인정보 활용에 동의해야만  <br></br>진로 체험에 참여할 수 있습니다. <br></br>
                    진로 체험 프로그램의 원활한 수행을 위하여 <br></br> 수집하는 개인 정보는 성명, 전화번호 등입니다. <br></br>
                    수집한 지원자의 개인 정보는 당해 년도 본교의 입학 관리 <br></br> 업무를 위한 정보로 보유 및 활용될 수 있습니다. <br></br>
                    수집한 개인 정보는 본교의 입학 관리 업무 완료 후 모두 삭제됩니다.</p>

                    <label><input type='radio' name='form_ok' id="form_ok" value={1}></input>예, 동의합니다.</label>
        

                    </div>
                </td>
              </tr>
          </table>
            <div id='btn_div'>
                <p  className='btn1'><Link to="../">뒤로가기</Link></p>
                <p className='btn2' onClick={applications} >신청하기</p>
            </div>
        </form>
  </div>

  )
}

export default Form;