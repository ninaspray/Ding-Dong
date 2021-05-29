import axios from "axios";

const updatePackage = async () => {
  const path = `https://ding-dong-backend.herokuapp.com//packages/:packageId`;
  try {
    const response = await axios.patch(path);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export default updatePackage;

