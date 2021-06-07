import axios from "axios";

const getTennant = async () => {
  const cors = require("cors");
  const path = `https://ding-dong-backend.herokuapp.com/tennants`;

  try {
    const response = await axios.get(path, cors());
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export default getTennant;
