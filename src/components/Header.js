import './header.css'

export const Header = ({flags}) => {

    return(

        <div className="header">

            <h2> World Countries Data</h2>

            {flags != null &&

            <p>Currently, we have {flags.length} countries</p>

            }



        </div>



    )
}