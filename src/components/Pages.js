// https://jsonplaceholder.typicode.com/todos



import {useEffect, useState} from 'react'



export const Pages = ()=> {
    
    const[items, setItems] = useState();
    const[itensPage, setItensPage] = useState(10);
    const[currtentPage, setCurrentpage] = useState(0);

    const pages = Math.ceil(items.length / itensPage)

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
            <div>
            {Array.from(Array(pages),(item,index)=>{
                return <button>{index}</button>
            })}
            </div>

            {items.map(item => {
               return <div><span>{item.id}</span> <span>{item.title}</span> <span>{item.completed}</span> </div> 
            })}

        </div>
    )
}