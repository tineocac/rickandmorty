import axios from 'axios'
import { useEffect, useState } from 'react'
import LocationItem from './LocationItem';

const RaMLocation = () => {

    const [rMLocation, setRMLocation] = 
    useState({})
    const [ typeId, setTypeId] = useState('')

    const randomId = Math.floor(Math.random() * 20) + 1

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
            .then(res => setRMLocation(res.data))
    }, [])

    const searchLocation = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
            .then(res => setRMLocation(res.data))
    }

    console.log(rMLocation);

    return (
        <div className='container'>
            <h1>{rMLocation.name}</h1>
            <input type="text"  value={typeId} onChange={ e =>setTypeId(e.target.value)}/>
            <button onClick={searchLocation}>Search</button>
            <ul className='cards'>{
                rMLocation.residents?.map(location => (
                   <LocationItem url={location} key={location}/>
                ))
            }
            </ul>
        </div>
    );
};

export default RaMLocation;