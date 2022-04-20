import './card.css'

export const Cards = ({flags}) => {

const languages = Object.values(flags.languages)

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
                    {languages.map((lang)=>(
                        <span> {lang}</span>
                    ))} <br/> <br/>
                    Population: {flags.population} <br/> <br/>
                    Currency:
            </div>



        </div>



    )


}