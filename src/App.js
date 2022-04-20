import './App.css';
import { Cards } from './components/Card';

import { useEffect, useState } from 'react'
import { API } from './components/API';

function App() {

  const [flags, setFlags] = useState();
  const [loading, setLoading] = useState(true);


  const loadCountries = async () => {

    let json = await API.getAllFlags(); 
    setFlags(json);
  }



  useEffect(()=>{
    setLoading(false);
    loadCountries();
    setLoading(true);
    
  },[]);




  return (

    <div className="App">



      {flags !== undefined &&

        flags.map((item, key)=>(

          <Cards key={key} flags={item} />
          
        ))


 
      }



    </div>
  );
}

export default App;


// {flags !== undefined &&

        
//   

// }