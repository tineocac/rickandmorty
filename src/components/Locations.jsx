import axios from 'axios'
import { useEffect } from 'react'
import Residents from './Residents';

const Locations = ({ location, setLocation }) => {

    const randomId = Math.floor(Math.random() * 20) + 1

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
            .then(res => setLocation(res.data))
    }, [])

    return (
        <div className='location-container'>
            <h2 className='location-title'>{location.name}</h2>
            <ul className='location-info'>
                <li>
                    <b>type: </b> {location.type}
                </li>
                <li>
                    <b>dimension: </b> {location.type}
                </li>
                <li>
                    <b>population: </b> {location.residents?.length}
                </li>
            </ul>

            <ul className='cards'>{
                location.residents?.map(location => (
                    <Residents url={location} key={location} />
                ))
            }
            </ul>
        </div>
    );
};

export default Locations;