import React, { useState, useEffect } from "react";
import getTennant from "../requests/getTennant";
import SendDingDong from "./SendDingDong";
//import sendDingDong from './DingDong';
import Collected from "./Collection";
// DingDongCTA props => tenant id
import "../styles/Table.css";

const TennantRow = ({ tennant, addParcel }) => {
  const { firstname, lastname, flat_number, id, packages } = tennant;
  const filtered = packages.filter((pack) => pack?.collected === false);
  return (
    <tr>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{flat_number}</td>
      <td className="table__send-dingdong">
        {filtered.length === 0 ? (
            <SendDingDong tennantId={id} addParcel={addParcel} />
        ) : (
            <Collected
              packages={filtered} /*updateCollection={updateCollection}*/
            ></Collected>
        )}
      </td>
    </tr>
  );
};

const TenantList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getTennant()
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const addParcel = (tennantId, parcel) => {
    setList((prev) =>
      prev.map((tennant) => {
        if (tennant.id === tennantId) {
          tennant.packages.push(parcel);
        }
        return tennant;
      })
    );
  };

  // const updateCollection = () => {
  //         getTennant()
  //            .then((response) => {
  //                setList(response.data);
  //            })
  //            .catch((error) => {
  //                console.error(error)
  //            });
  // }

  return (
    <div className="table__wrapper">
      <table id="table__send-dingdong">
        <thead>
          <tr className="table__row-head">
            <th>First Name</th>
            <th>Surname</th>
            <th>Apartment</th>
            <th>Notify</th>
          </tr>
        </thead>
        <tbody>
          {list.map((tennant) => (
            <TennantRow
              tennant={tennant}
              key={tennant.id}
              addParcel={addParcel} /*updateCollection={updateCollection}*/
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TenantList;
