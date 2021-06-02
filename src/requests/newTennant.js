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
      //"http://localhost:4000/tennants",
      "https://ding-dong-backend.herokuapp.com/tennants",
      data
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default newTennant;
