import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useTypeId from '../assets/hooks/useTypeId';
import FunctionsInput from './FunctionsInput';

const Navbar = ({ title, setLocation }) => {

    const { typeId, setTypeId} = useTypeId()

    const [isInputText, setInputText] = useState(true)


    const searchLocation = () => {
        setInputText(true)
        axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
            .then(res => setLocation(res.data)) 

            console.log(isInputText);
    }

    return (
        <div className='nav-container'>
            <nav className='nav-bg'>
                <img className='nav-img' src="" alt="" />
            </nav>
            <a className='nav-title' href="./">{title}</a>
            <div className="container-search">
            <FunctionsInput isInputText={isInputText} setInputText={setInputText} typeId={typeId} setTypeId={setTypeId} /> 
            <button className='button-search' onClick={searchLocation}>Search</button>       
            </div>
            
        </div>
    );
};

export default Navbar;