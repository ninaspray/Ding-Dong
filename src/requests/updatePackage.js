import axios from "axios";

const updatePackage = (packageId) => {
  console.log(packageId);
  const data = {
    collected: true,
  };
  axios
    .patch(
      `https://ding-dong-backend.herokuapp.com/packages/${packageId}`,
      data
    )
    // ({
    //   method: "patch",
    //   url: ,
    //   data: data,
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/json",
    //   },
    // })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("This is an error", error);
    });
};

export default updatePackage;
