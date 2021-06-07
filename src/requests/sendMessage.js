import axios from "axios";

const newMessage = (tennantId) => {
  const data = {
    tennantId: tennantId,
  };
  axios
    .post("https://ding-dong-backend.herokuapp.com/sendsms", data)
    // ({
    //   method: "post",
    //   url: "http://localhost:4000/sendsms", //"https://ding-dong-backend.herokuapp.com/sendsms",
    //   data: data,
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/json",
    //   },
    // })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("This is an error", error);
    });
};

export default newMessage;
