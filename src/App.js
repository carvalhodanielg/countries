import './App.css';
import {Routes, Route}  from 'react-router-dom';
import { Game } from './components/Game'
import { Home } from './components/Home'

import { useEffect, useState } from 'react'
import { API } from './components/API';
import  gifLoad  from './images/loading-gif.gif'

function App() {

  const [flags, setFlags] = useState();

  const loadCountries = async () => {
    let json = await API.getAllFlags(); 
    setFlags(json);
}

useEffect(()=>{
  loadCountries();
},[]);


  return (
    <div className="App">

      <Routes>
          <Route path='/game' element={<Game flags={flags}/>} ></Route>
          <Route path='/' element={<Home />} ></Route>
      </Routes>


    </div>
  );
}

export default App;
