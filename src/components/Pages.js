// https://jsonplaceholder.typicode.com/todos



import {useEffect, useState} from 'react'



export const Pages = ()=> {
    
    const[items, setItems] = useState();


    useEffect(()=>{

        const fetchData = async ()=>{
            const result = await fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => data)

            setItems(result)

        }

        fetchData();


    },[])
    
    return(
        <div>
            {items.map(item => {
               return <div><span>{item.id}</span> <span>{item.title}</span> <span>{item.completed}</span> </div> 
            })}
        </div>
    )
}