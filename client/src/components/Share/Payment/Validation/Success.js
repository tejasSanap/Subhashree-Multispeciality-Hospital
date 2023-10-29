import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const Success = () => {
  /* let history = useHistory() */
  const { id } = useParams();
  /* console.log(id);

     useState declare ()

    useEffect declare ()
    */

  const validatePayment = () => {
    const data = {
      tran_id: id,
      /* val_id: medicine?.val_id ( must needed ) */
    };
    axios.post(`http://localhost:7050/validate`, data).then((res) => {
      if (res.data) {
        alert("Order placed successfully");
        /* history.push('/home') */
      }
    });
  };
  return (
    <div>
      <h2>This is success page</h2>
      <button onClick={validatePayment}>Confirm Payment</button>
    </div>
  );
};

export default Success;
