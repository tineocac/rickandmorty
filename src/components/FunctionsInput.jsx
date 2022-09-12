import axios from "axios";
import { useEffect, useState } from "react";

const FunctionsInput = ({ typeId, setTypeId }) => {

    const [locations, setLocations] = useState({})
    const urlLocations = 'https://rickandmortyapi.com/api/location'

    const fecthLocation = (url) => {
        axios.get(url)
            .then(res => setLocations(res.data.results))
    }

    useEffect(() => {
        fecthLocation(urlLocations)
    }, [])



    if (typeId === '') {
        return (
            <div className="input-container">
                <input className="input-search" type="text" placeholder='type id location here' value={typeId} onChange={e => setTypeId(e.target.value)} />
            </div>)
    } else {
        return (
            <div

                className="input-container">
                <input className="input-search" type="text" placeholder='type id location here' value={typeId} onChange={e => setTypeId(e.target.value)}
                />

                <ol
                    className="list-locations">
                    {
                        locations.map(location => (
                            <li className="list-item" key={location.id}>{
                                location.name}</li>
                        ))
                    }
                </ol>

            </div>
        )
    }
};

export default FunctionsInput;