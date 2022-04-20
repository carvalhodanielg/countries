import './card.css'


export const Cards = ({flags}) => {


    return (

        
        <div className="card"> 






             <div className="flagArea">
                   <img src={flags.flags.png} alt=""/> 
            </div>

            <div className="nameArea">
            {flags.name.common}
            </div>

            <div className="infosArea">
                    Capital: {flags.capital} <br/> <br/>
                    Languages: 
                    {flags.languages !== undefined &&

                    Object.values(flags.languages).map((item)=>(
                        <span> {item}, </span>
                    ))
                    


                //    <span>{Object.values(flags.languages)}</span> 

                    }



                     <br/><br/>
                    Population: {flags.population} <br/> <br/>
                    Currency:
            </div>



        </div>



    )


}