import axios from "axios";

const newTennant = (tennant) => {
    console.log(tennant);
    const data = {
      firstname: tennant.firstname,
      lastname: tennant.lastname,
      email: tennant.email,
      telephone: tennant.telephone,
      flat_number: tennant.flat_number,
    };
    axios
    .post(
    "https://ding-dong-backend.herokuapp.com/tennant",
    data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  };

export default newTennant;