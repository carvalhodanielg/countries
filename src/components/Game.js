import { Cards } from './Card';
import {useState, useEffect} from 'react'
import {Header} from './Header'
import './game.css'
import { API } from './API';
import { Loading } from './Loading';

export const Game = () =>{

    const [flags, setFlags] = useState();
    const [Countrie, setCountrie] = useState();
    const [status, setStatus] = useState(false);
    const [loading, setLoading] = useState(true);

const randCountrie = () => {
    let min = Math.ceil(1)
    let max = Math.floor(250)
    setCountrie(Math.floor(Math.random()*(max-min)) + min)
}

const loadCountries = async () => {
    
    let json = await API.getAllFlags(); 
    setFlags(json);
    setLoading(false);
}


const changeFlag = () => {
    randCountrie();
    setStatus(false)
}

const changeStatus = () => {
    setStatus(!status);
}

useEffect(()=>{
    randCountrie();
    loadCountries();
;},[])

    return(

        <div className='game'> 

                <Header/>

                {loading==true &&
                    <Loading/> 
                }

                <div className='content'>
                    {flags !== undefined &&
                    <Cards flags={flags[Countrie]} status={status}/>
                    }

                </div>
                
                <div className='buttonArea'>

                    <button onClick={changeFlag}>Change Countrie</button> 
                    <button onClick={changeStatus} >Reveal Countrie</button>

                </div>
  

                



        </div>
    )

}