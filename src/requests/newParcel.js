import axios from "axios";

const newParcel = (parcel) => {
    console.log(parcel);
    const data = {
      size: parcel.size,
      notified: parcel.notified,
    };
    axios
    .post(
    "https://ding-dong-backend.herokuapp.com/tennants/:tennantId/packages",
    data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  };

export default newParcel;