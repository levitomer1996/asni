import React, { useRef, useEffect, useState, useContext } from "react";
import PaymentContext from "../../context/PaymentContext";

export default function ReactPaypal({ totalPrice, description }) {
  const paypal = useRef();
  const { setPaypalTransectionCompleted } = useContext(PaymentContext);
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "חבילות אסני",

                amount: {
                  currency_code: "ILS",
                  value: 9,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          if (order.status === "COMPLETED") {
            setPaypalTransectionCompleted({
              isComplete: true,
              PaypalTransection: order,
            });
          }
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
