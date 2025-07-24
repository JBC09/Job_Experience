export default function Admin_sub({data}){
  return(

    <div id='admin_sub'>
        <table>
            <tr>
              <td>이름</td>
              <td className='app_data'>{data.name}</td>
            </tr>

            <tr>
              <td>신청날짜</td>
              <td className='app_data'>{data.applicationDate}</td>
            </tr>

            <tr>
              <td>출신중학교</td>
              <td className='app_data'>{data.school}</td>
            </tr>

            <tr>
              <td>지역</td>
              <td className='app_data'>{data.region1 ?  data.region1 + " " +data.region2 : " "}</td>
            </tr>

            <tr>
              <td>학생번호</td>
              <td className='app_data'>{data.studentTel}</td>
            </tr>

            <tr>
              <td>부모님번호</td>
              <td className='app_data'>{data.parentTel}</td>
            </tr>

            <tr>
              <td>희망학과</td>
              <td className='app_data'>{data.depart}</td>
            </tr>

            <tr>
              <td>궁금한점</td>
              <td className='app_data'>{data.question}</td>
            </tr>

            <tr>
              <td>알게된 방법</td>
              <td className='app_data'>{data.way}</td>
            </tr>

            <tr>
              <td>동행자</td>
              <td className='app_data'>{data.people ? `${data.people}명` : ""}</td>
            </tr>

            <tr>
              <td>신청상태</td>
              <td className='app_data'>{data.status}</td>
            </tr>
        </table>
    </div>
  )
}