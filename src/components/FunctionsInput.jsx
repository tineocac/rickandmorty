import axios from "axios";
import { useEffect, useState } from "react";

const FunctionsInput = ({ isInputText, setInputText, typeId, setTypeId }) => {

    const [locations, setLocations] = useState({})
    const urlLocations = 'https://rickandmortyapi.com/api/location'

    const fecthLocation = (url) => {
        axios.get(url)
            .then(res => setLocations(res.data.results))
    }

    useEffect(() => {
        fecthLocation(urlLocations)
    }, [])



    if (isInputText === true) {
        return (
            <div className="input-container">
                <input className="input-search" onClick={() => setInputText(!isInputText)} type="text" placeholder='type name location here' value={typeId} onChange={e => setTypeId(e.target.value)} />
            </div>)
    } else {
        return (
            <div className="input-container">
                <input className="input-search" onClick={() => setInputText(!isInputText)} type="text" placeholder='type name location here' value={typeId} onChange={e => setTypeId(e.target.value)} />

                <ul
                    className="list-locations">
                    {
                        locations.map(location => (
                            <li key={location.id}>{
                                location.name}</li>
                        ))
                    }
                </ul>

            </div>
        )
    }
};

export default FunctionsInput;