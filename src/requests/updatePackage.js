import axios from "axios";

const updatePackage = async () => {
  const path = "http://localhost:4000/packages/:packageId";
  //`https://ding-dong-backend.herokuapp.com//packages/:packageId`;
  try {
    const response = await axios.patch(path);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export default updatePackage;

