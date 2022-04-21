

export const Header = ({flags}) => {

    return(

        <div>

            <h2> World Countries Data</h2>

            {flags != null &&

            <p>Currently, we have {flags.length} countries</p>

            }



        </div>



    )
}