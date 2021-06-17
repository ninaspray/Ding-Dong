import React from "react";
import newParcel from "../requests/newParcel";
import newMessage from "../requests/sendMessage";
import "../styles/Table.css";

//custom Hooks
import { useForm } from "../hooks/useForm";

const SendDingDong = ({ tennantId, addParcel }) => {
  const [{ size }, setInput, resetInput] = useForm({
    size: "",
  });

  const submitForm = (e) => {
    newParcel({ size }, tennantId).then((parcel) => {
      addParcel(tennantId, parcel);
    });
    console.log("Ding Dong Sent!");
    resetInput(e);
  };

  return (
    <div className="table__notify-section">
      <form onSubmit={submitForm}>
        <label htmlFor="Type">
          <select
            className="table__dropdown"
            placeholder="Parcel Size"
            name="size"
            value={size}
            onChange={setInput}
          >
            <option placeholder="Parcel Size">Parcel Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
        <span> </span>
        <button
          className="table__button"
          id="send-dingdong"
          type="submit"
          onClick={() => newMessage(tennantId)}
        >
          Send DingDong
        </button>
      </form>
    </div>
  );
};

export default SendDingDong;
