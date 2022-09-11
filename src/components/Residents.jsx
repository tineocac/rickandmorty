import axios from "axios";
import { useEffect, useState } from "react";

const Residents = ({ url }) => {

    const [resident, setResident] = useState({})

    useEffect(() => {
        axios.get(url)
            .then(res => setResident(res.data))
    }, [])

    return (
        <div className="content-card">
            <h1>
                {resident.name}
            </h1>
            <li>
                <img className="img" src={resident.image} alt="" />
            </li>
            <li>
                {resident.status}
            </li>

            <li>
                <b>origin: </b>
                {resident.origin?.name}
            </li>

            <li>
                <b>appearance in episodes: </b> {resident.episode?.length}
            </li>
        </div>


    );
};

export default Residents;