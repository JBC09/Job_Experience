import { Link } from "react-router-dom";

function Header(){

  window.addEventListener('scroll',()=>{
    let scrollLocation = document.documentElement.scrollTop;
    const head = document.getElementById("head");


    if(scrollLocation ==  0){
      head.style.backgroundColor = "";
      head.style.backdropFilter = "";
      head.style.borderBottom = "";
    }
    
    else{
      head.style.backgroundColor = "rgba(255,255,255,0.8)";
      head.style.backdropFilter = "blur(5px)";
      head.style.borderBottom = "1px solid #ddd";
    }
  });

  
  return(
    <header id='head'>
    <a href="/">
      <div id='logo'>
        <img src="/img/logo.png" id='logo_img'></img>
        <h1>경북소프트웨어고등학교 중학생 진로체험</h1>
      </div>
    </a>
    
    
  </header>
  )
}


export default Header;