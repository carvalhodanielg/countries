import './App.css';
import { Cards } from './components/Card';

import { useEffect, useState } from 'react'
import { API } from './components/API';

function App() {

  const [flags, setFlags] = useState();
  const [loading, setLoading] = useState(true);
  const [textInput, setTextInput] = useState('');


  const loadCountries = async () => {

    let json = await API.getAllFlags(); 
    setFlags(json);
  }



  useEffect(()=>{
    //botar função asincrona pra carreagar API
    setLoading(false);
    loadCountries();
    setLoading(true);
    
  },[]);

  const handleChangeInput = (e) => {

    setTextInput(e.target.value)


  }


  return (

    <div className="App">

    <header>

        <h2> World Countries Data</h2>
        {/* <p>Currently, we have {flags.length} countries</p> */}
        
    </header>

      <div className='searchArea'>

          <input type='text' value={textInput} onChange={handleChangeInput} />

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