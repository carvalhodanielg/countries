import { Cards } from './Card';
import {useState, useEffect} from 'react'
import {Header} from './Header'
import './game.css'




export const Game = ({flags}) =>{


const [Countrie, setCountrie] = useState();
const [status, setStatus] = useState(false);

useEffect(()=>{
    randCountrie();
;},[])


const randCountrie = () => {

    let min = Math.ceil(1)
    let max = Math.floor(250)
    setCountrie(Math.floor(Math.random()*(max-min)) + min)

}

const changeFlag = () => {
    randCountrie();
}

const changeStatus = () => {

    setStatus(!status);
}


    return(

        <div className='game'> 

                <Header/>

                <div className='content'>
                    {flags !== undefined &&
                    <Cards flags={flags[Countrie]} status={status}/>
                    }

                    <button onClick={changeFlag}>Change Countrie</button> 
                    <button onClick={changeStatus} >Reveal Countrie</button>

                </div>
                
  

                



        </div>
    )

}