import axios from 'axios';
import React, { useState } from 'react';

const Navbar = ({title, setLocation}) => {

    const [ typeId, setTypeId] = useState('type location id')

    const eraseText = () => {
        if( typeId === 'type location id'){
            setTypeId('')
        }
    }


    const searchLocation = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
            .then(res => setLocation(res.data))
            setTypeId('')
    }

    console.log(typeId);

    return (
        <div className='nav-container'>
            <nav className='nav-bg'>
                <img className='nav-img' src="" alt="" />
            </nav>
            <a className='nav-title' href="./">{title}</a>
            <input onClick={eraseText} type="text"  value={typeId} onChange={ e =>setTypeId(e.target.value)}/>
            <button onClick={searchLocation}>Search</button>
        </div>
    );
};

export default Navbar;