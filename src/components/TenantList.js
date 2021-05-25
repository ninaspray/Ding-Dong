import React, { useState, useEffect } from 'react';
import getTennant from '../requests/getTennant';

// DingDongCTA props => tenant id


const TennantRow = ({tennant}) => {
    const {firstname, lastname, flat_number} = tennant;
    return <tr> <td>{firstname}</td> <td>{lastname}</td> <td>{flat_number}</td></tr>    
}

const TenantList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
         getTennant()
            .then((response) => {
                setList(response.data);
            })
            .catch((error) => {
                console.error(error)
            });
    }, [])

 
    return (

        <table>
        <tr> 
            <td>
            {list.map((tennant) => <TennantRow tennant={tennant} key={tennant.id} />)}
            </td>
        </tr>
        </table>
    );
}

export default TenantList;