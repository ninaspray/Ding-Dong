// import React from "react";
// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import getTennant from '../requests/getTennant';
// import TennantCard from './TennantCard';


// const Tennants = () => {

//     const [tennants, setTennants] = useState([]);
//     const [alert, setAlert] = useState();

//     useEffect(() => {
//         getTennant().then((response) => {
//             if (!response || response.status !== 200) {
//               setAlert({
//                 message: "Database connection failed. Please try again later.",
//               });
//             } else {
//                 setTennants(response.data);
//             }
//           });
//         }, []);

//         const { search } = useLocation();
//         useEffect(() => {
//         }, [search]);


//   return (
//         <div className="TennantDisplay">
//         {tennants.map((tennant) => {
//           return (
//             <TennantCard
//             firstname={tennant.firstname}
//             lastname={tennant.lastname}
//             email={tennant.email}
//             telephone={tennant.telephone}
//             flat_number={tennant.flat_number}
//             />
//           )}
//           )}
//         </div>
//   )};


// export default Tennants;