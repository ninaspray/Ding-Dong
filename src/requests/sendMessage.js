import axios from "axios";

const newMessage = (tennantId) => {
  const data = {
    tennantId: tennantId,
  };
  axios
    .post(
      // "http://localhost:4000/sendsms",
      "https://ding-dong-backend.herokuapp.com/sendsms",
      data
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default newMessage;
