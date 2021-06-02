import axios from "axios";

const newParcel = (parcel, tennantId) => {
  console.log(parcel);
  const data = {
    size: parcel.size,
  };
  return axios
    .post(
      //`http://localhost:4000/tennants/${tennantId}/packages`,
      `https://ding-dong-backend.herokuapp.com/tennants/${tennantId}/packages`,
      data
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default newParcel;
