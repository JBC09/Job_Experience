

import { useEffect, useState } from 'react';

import Menu from './componet/Menu';
import {  BrowserRouter,Route, Routes } from 'react-router-dom';
import Header from './componet/Header';
import Footer from './componet/footer';
import Form from './componet/Form';
import Admin from './componet/Admin';
import AppList from './componet/admin/AppList';
import RoundList from './componet/admin/RoundUpdate';
import RoundApp from './componet/admin/RoundApp';
import Login from './componet/Login';

function App() {

  return (
    <div className="App">

    <Header/>
    <BrowserRouter>   
      
      <Routes>
        <Route path="/" exact element={<Menu />}/>
        <Route path='/adminLogin' element={<Login/>}></Route>
        <Route path="/application/:dateCode" element={<Form />} />
        <Route path="/admin/*" element={< Admin />}/>
      </Routes>
    
    </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
