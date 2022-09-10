import axios from "axios";
import { useEffect, useState } from "react";

const Residents = ({ url }) => {

    const [resident, setResident] = useState({})

    useEffect(() => {
        axios.get(url)
            .then(res => setResident(res.data))
    }, [])

    return (
        <li className="content-card">
            {resident.name}
            <img className="img" src={resident.image} alt="" />
        </li>


    );
};

export default Residents;