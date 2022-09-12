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
            <h1 className="resident-name">
                {resident.name}
            </h1>
            <ul className="resident-feature">
                <li>
                    <img className="img" src={resident.image} alt="" />
                </li>
                <li>
                    {resident.status}
                </li>

                <li>
                    <b className="feacture">origin: </b>
                    {resident.origin?.name}
                </li>

                <li>
                    <b className="feacture">appearance in episodes: </b> {resident.episode?.length}
                </li>
            </ul>
        </div>


    );
};

export default Residents;