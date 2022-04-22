import './App.css';
import { Cards } from './components/Card';
import { useEffect, useState } from 'react'
import { API } from './components/API';
import { Header } from './components/Header';
import {Routes, Route}  from 'react-router-dom';
import { Game } from './components/Game'
// import { Home } from './components/Home'


function App() {

  const [flags, setFlags] = useState();
  const [loading, setLoading] = useState(true);
  const [textInput, setTextInput] = useState("");


  const loadCountries = async () => {
      let json = await API.getAllFlags(); 
      setFlags(json);
  }

  const filteredCountries = async (busca) => {
    if(busca != ''){
      let json = await API.filteredFlags(busca);
      setFlags(json)
      console.log('filtered: '+busca)
    }else{
      loadCountries();
    }

  }


  useEffect(()=>{
      setLoading(false);
      loadCountries();
 
      setLoading(true);

 
  },[]);

  const handleChangeInput = (e) => {

          setTextInput(e.target.value)
          filteredCountries(e.target.value)
          console.log(e.target.value)
        
  }




  return (

      

    <div className="App">


    <Routes>

        <Route path='/game' element={<Game />} ></Route>
        {/* <Route path='/' element={<App/>} ></Route> */}

    </Routes>


    <header>

        <Header flags={flags}/>
        
    </header>


      <div className='searchArea'>

          <input type='text' value={textInput} onChange={handleChangeInput} placeholder='Search countries by name...'/>

      </div>

      <div className='mainContainer'>
          {flags !== undefined &&

          

          flags.map((item, key)=>(

          <Cards key={key} flags={item} />
  
          ))
          }

      </div>





    </div>
  );
}

export default App;


// {flags !== undefined &&

        
//   

// }