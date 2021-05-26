import axios from "axios";

const getTennant = async () => {
  const path = `http://localhost:4000/tennants/`;
//  const path = `https://ding-dong-backend.herokuapp.com/tennants/`;
  try {
    const response = await axios.get(path);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export default getTennant;