import { useEffect, useRef} from 'react'
// import Session from 'react-session-api';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import Session from 'react-session-api';


export default function Login(){

  const navigate = useNavigate();
        let idRef = useRef();
        let passRef = useRef();
      function loginok(){
       
        fetch("https://jobexp.gbsw.hs.kr/api/login",{
          method:'POST',
          headers:{
            "Content-Type": "application/json",
          },
          body:JSON.stringify({   
            
              id:idRef.current.value,
              password:passRef.current.value,
          })
        })
        .then((res) => res.json())
        .then((data) => {
          if(data.success){
            alert('로그인에 성공하였습니다.');

            navigate('/admin/appList');
          }
          else{
            alert("아이디와 비밀번호가 맞지 않습니다.");
          }
        })}


    return(

      <div id='LoginBack'>
        <form class="login">
          <h1>관리자 로그인</h1>
          <input type="text" id='id' placeholder="관리자 아이디" ref={idRef}></input>
          <input type="password" id='pass' placeholder="관리자 비밀번호" ref={passRef}></input>
          <br></br>
          <p onClick={loginok}>로그인</p>
        </form>
      </div>

    )
}