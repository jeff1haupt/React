import { useState, useEffect } from "react";

function Breweries (props) {
    const [breweryList, getBreweries] = useState([])
    const [error, setError] = useState(null)

    useEffect( () => {
        fetch('https://api.openbrewerydb.org/breweries?page=241')
        .then( res => res.json() )
        .then( res => {
            console.log(res);
            getBreweries(res);
        })
        .catch(error => setError(error))
    }, []);

    if (error) {
        console.log(error)
        return <h1>Error: {error.message}</h1>
    } else {
        return(

            breweryList.map( brew => {
                return(
                    <p>{brew.name} <br />
                    {brew.website_url} </p>
                ) 
            })
        )
    }

}

export default Breweries;