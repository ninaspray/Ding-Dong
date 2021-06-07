import axios from "axios";

const newParcel = async (parcel, tennantId) => {
  const path = `https://ding-dong-backend.herokuapp.com/tennants/${tennantId}/packages`;
  console.log(parcel);
  const data = {
    size: parcel.size,
  };
  return await axios
    .post(path, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default newParcel;
