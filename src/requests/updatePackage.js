import axios from "axios";

const updatePackage = (packageId) => {
  console.log(packageId);
  const data = {
    collected: true,
  };
  axios({
    method: "patch",
    url: `https://ding-dong-backend.herokuapp.com/packages/${packageId}`,
    data: data,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default updatePackage;
