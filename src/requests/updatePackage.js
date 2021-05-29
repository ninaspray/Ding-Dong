import axios from "axios";

const updatePackage = (packageId) => {
  console.log (packageId);
  const data = {
    collected: true,
  };
  return axios
  .patch(
    `http://localhost:4000/packages/${packageId}`, data)
  .then((response) => {
    return response.data
  })
  .catch((error) => {
    console.log(error);
  });
};

export default updatePackage;