import React, { useState, useEffect } from 'react';
import getTennant from '../requests/getTennant';
import SendDingDong from './DingDong';
//import sendDingDong from './DingDong';
import Collected from './Collection';
// DingDongCTA props => tenant id


const TennantRow = ({tennant}) => {
    const {firstname, lastname, flat_number} = tennant;
    return  <tr> <td>{firstname}</td><br/> 
            <td>{lastname}</td><br/> 
            <td>{flat_number}</td><br/>
            <td><SendDingDong setList/></td>   
            <td><Collected></Collected></td></tr> 
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
<>
        <h1>Notify Tenant</h1>

        <h2>Find Tennant</h2>

        <table>
        <tr> 
            <td>
            {list.map((tennant) => <TennantRow tennant={tennant} key={tennant.id} />)}
            </td>
        </tr>
        </table>

</>
    );
}

export default TenantList;