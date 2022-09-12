import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useTypeId from '../assets/hooks/useTypeId';
import FunctionsInput from './FunctionsInput';

const Navbar = ({ title, setLocation }) => {

    const { typeId, setTypeId } = useTypeId()

    const searchLocation = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
            .then(res => setLocation(res.data))
        setTypeId('')

    }

    return (
        <div className='nav-bg'>
            <div className="nav-container">
                <a className='nav-title' href="./">{title}</a>
                <div className="container-search">
                    <FunctionsInput typeId={typeId} setTypeId={setTypeId} />
                    <button className='button-search' onClick={searchLocation}>Search</button>
                </div>
            </div>

        </div>
    );
};

export default Navbar;