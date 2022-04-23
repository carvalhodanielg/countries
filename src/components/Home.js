import { Cards } from './Card';
import { useEffect, useState } from 'react'
import { API } from './API';
import { Header } from './Header';
import  gifLoad  from '../images/loading-gif.gif'
import { Loading } from './Loading';

export const Home = () => {

    const [flags, setFlags] = useState();
    const [loading, setLoading] = useState(true);
    const [textInput, setTextInput] = useState("");
    const [status, setStatus] = useState(true);
  
  
    const loadCountries = async () => {
 
        let json = await API.getAllFlags(); 
        setFlags(json);
        setLoading(false);
    }
  
    const filteredCountries = async (busca) => {
        setLoading(true);
      if(busca != ''){
        let json = await API.filteredFlags(busca);
        setFlags(json)
        console.log('filtered: '+busca)
      }else{
        loadCountries();
      }
      setLoading(false);
    }
  
    useEffect(()=>{
  
        loadCountries();
        setStatus(true)

    },[]);
  
    const handleChangeInput = (e) => {
  
            setTextInput(e.target.value)
            filteredCountries(e.target.value)
            console.log(e.target.value)  
    }


    return(
        <div>
            
      <header>
          <Header flags={flags}/>
      </header>



      <div className='searchArea'>
          <input type='text' value={textInput} onChange={handleChangeInput} placeholder='Search countries by name...'/>
      </div>

      {loading==true &&
        <Loading/> 
      }

      <div className='mainContainer'>
          {flags !== undefined &&

          flags.map((item, key)=>(

          <Cards key={key} flags={item} status={status} />
  
          ))
          }

      </div>




        </div>
    )
}

