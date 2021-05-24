// import React, { useState } from "react";
// import { Link, useLocation, useHistory } from "react-router-dom";
// import qs from "qs";


// const FindTennant = () => {

//     const [query, setQuery] = useState("");

//     const buildQueryString = (operation, valueObj) => {
//         const { search } = useLocation();
      
//         const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
      
//         const newQueryParams = {
//           ...currentQueryParams,
//           [operation]: JSON.stringify({
//             ...JSON.parse(currentQueryParams[operation] || '{}'),
//             ...valueObj,
//           }),
//         };
      
//         return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
//       };
    
//       const handleSearchInputChange = (event) => setSearchText(event.target.value);
    
//       const handleSearch = (event) => {
//         event.preventDefault();
//         const queryString = buildQueryString("query", {
//           title: { $regex: searchText },
//         });
//         setSearchText("");
//         document.getElementById("search").value = "";
//         history.push(queryString);
//       };

//   return (
//         <>
//       <div className="filter-sort-wrapper">
//           <header>Find Tennant By Flat</header>
//             <Link to={("query", { flat_number: "1A" })}>1A</Link>
//             <br/>
//             <Link to={("query", { flat_number: "2B" })}>2B</Link>
//             <br/>
//             <Link to={("query", { flat_number: "3C" })}>3C</Link>
//             <br/>
//             <Link to={("query", { flat_number: "4D" })}>4D</Link>
//             <br/>
//             <Link to={("query", { flat_number: "5E" })}>5E</Link>
//             <br/>
//             <Link to={("query", { flat_number: "6F" })}>6F</Link>
//             <br/>
//             <Link to={("query", { flat_number: "7G" })}>7G</Link>
//             <br/>
//             <Link to={("query", { flat_number: "8H" })}>8H</Link>
//             <br/>
//             <Link to={("query", { flat_number: "9I" })}>9I</Link>
//             <br/>
//             <Link to={("query", { flat_number: "10J" })}>10J</Link>
//       </div>
//       <form onSubmit={handleSearch}>
//         <input 
//         type="text" 
//         value={query} 
//         onChange={(e) => setQuery(e.target.value)}
//         />
//         <button type="submit">Search</button>
//     </form>
//     </>
//   );
// };

// export default FindTennant;