import React, { useContext, useEffect } from "react";
import PaymentContext from "../../../context/PaymentContext";
import asni_server from "../../../api/asni_server";
function CompletePage() {
  const { paymentState } = useContext(PaymentContext);

  useEffect(async () => {
    const { update_time } = paymentState.isPaypalTransectionComplete;
    try {
      asni_server.post("/addtransaction", { create_time: update_time });
    } catch (error) {}
  }, [paymentState.isPaypalTransectionComplete]);
  return <div>Complete</div>;
}

export default CompletePage;
