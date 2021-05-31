import React, { useState, useEffect } from "react";
import getTennant from "../requests/getTennant";
import SendDingDong from "./SendDingDong";
//import sendDingDong from './DingDong';
import Collected from "./Collection";
// DingDongCTA props => tenant id

const TennantRow = ({ tennant, addParcel }) => {
  const { firstname, lastname, flat_number, id, packages } = tennant;
  const filtered = packages.filter((pack) => pack?.collected === false);
  return (
    <tr>
      {" "}
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{flat_number}</td>
      {/* <br />
      <td>{telephone}</td>
      <br /> */}
      {filtered.length === 0 ? (
        <td>
          <SendDingDong tennantId={id} addParcel={addParcel} />
        </td>
      ) : (
        <td>
          <Collected
            packages={filtered} /*updateCollection={updateCollection}*/
          ></Collected>
        </td>
      )}
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
    <>
      <h1>Notify Tenant</h1>
      <h2>Find Tennant</h2>

      <table>
        <tr>
          <td>
            {list.map((tennant) => (
              <TennantRow
                tennant={tennant}
                key={tennant.id}
                addParcel={addParcel}
              />
            ))}
          </td>
        </tr>
      </table>
    </>
  );
};

export default TenantList;
