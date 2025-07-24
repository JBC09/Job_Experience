import './admin.css';
import {  Link,Route, Routes} from 'react-router-dom';
import AppList from './admin/AppList';
import RoundApp from './admin/RoundApp';
import RoundList from './admin/RoundUpdate';
import DetailAppList from './admin/DetailAppList';
import Admin_sub from "./admin/Admin_sub";
import { useEffect, useState } from 'react';

export default function Admin(){
  
  const [selectListData, setSelectListData] = useState({});
  const [userInfo, setUserInfo] = useState({});

  function remove(){
    let brother = document.querySelectorAll("#main p");
    brother.forEach((e)=>{
      e.classList.remove('active');
    });
  }

  function click(e){
    remove()
    e.target.classList.add('active') 
  }

  useEffect(() => {

    const getUserInfo = fetch("https://jobexp.gbsw.hs.kr/api/session")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      setUserInfo(res);
    })
  }, [])
  
  if(!userInfo.user_id) {
    return(
      <div id='admin_main2'>
        <h1>관리자만 접근이 가능합니다.</h1>
      </div>
    )
  }

  return(
    <div id='admin_main'>
      <div id='admin'>
        <div id='one'>
          <h1>관리자페이지</h1>
          <div id='main'>
            <Link to={ "/admin/appList" }><p className='active' onClick={ click }>신청목록</p></Link>
            <Link to={ "/admin/roundApp" }><p onClick={ click }>회차등록</p></Link>
            <a href='/logout'>로그아웃</a>
          </div>
        </div>

        <div id='two'>
          <Routes>
            <Route path="/appList" exact element={<AppList />} />
            <Route path="/appList/:id"  exact element={<DetailAppList setData={setSelectListData}/>}/>
            <Route path="/roundApp"  exact element={<RoundApp />} />
            <Route path="/RoundUpdate "   exact element={<RoundList />} />
          </Routes>
        </div>
      </div>

    <Admin_sub data={selectListData}/>

    </div>
  )
}