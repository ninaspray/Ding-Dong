import axios from "axios";

const newMessage = (tennantId) => {
  const data = {
    tennantId: tennantId,
  };
  axios({
    method: "post",
    url: "https://ding-dong-backend.herokuapp.com/sendsms",
    data: data,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default newMessage;
