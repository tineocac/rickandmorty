import axios from "axios";
import { useEffect, useState } from "react";

const LocationItem = ({ url }) => {

    const [character, setCharacter] = useState({})

    useEffect( () => {
        axios.get(url)
        .then(res => setCharacter(res.data))
    }, [])

    console.log(character);

    return (
            <li className="content-card">
                {character.name}
                <img className="img" src={character.image} alt="" />
            </li>
            
       
    );
};

export default LocationItem;