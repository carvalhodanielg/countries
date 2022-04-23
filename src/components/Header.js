import './header.css'
import { Link } from 'react-router-dom' 

export const Header = ({flags}) => {

    return(

        <div className="header">

            <h2> World Countries Data</h2>

                <div className='menu'>
                    
                    <Link to='/'>
                        <span>Home</span>
                    </Link>

                    <Link to='/game'>
                        <span>Card game</span>
                    </Link>
                </div>


            {flags != null &&

            <p>Currently, we have {flags.length} countries</p>

            }



        </div>



    )
}