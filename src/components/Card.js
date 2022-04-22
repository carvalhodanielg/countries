import './card.css'


export const Cards = ({flags, status}) => {


    return (

        
        <div className="card"> 
        

             <div className="flagArea">
                   <img src={flags.flags.png} alt=""/> 
            </div>


            <div className="nameArea">

            <h2>{flags.name.common}</h2>
        
            </div>


            <div className="infosArea">
                   <p> <strong> Capital: </strong>  {flags.capital}</p>
                   <span>
                   <strong> Languages: </strong>
                    </span>  
                    {flags.languages !== undefined &&
                    
                    

                    Object.values(flags.languages).map((item, index)=>(
                        <span key={index}> {item} </span>
                    ))
                
                    }

                    <p>
                    <strong> Population: </strong> 
                    {flags.population}
                    </p> 


 

                    Currency:
            </div>



        </div>



    )


}