import axios from "axios";

const updatePackage = (packageId) => {
  console.log(packageId);
  const data = {
    collected: true,
  };
  return axios
    .patch(
      `https://ding-dong-backend.herokuapp.com/packages/${packageId}`,
      data
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default updatePackage;
