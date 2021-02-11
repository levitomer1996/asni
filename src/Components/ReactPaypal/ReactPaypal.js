import React, { useRef, useEffect, useState, useContext } from "react";
import PaymentContext from "../../context/PaymentContext";

export default function ReactPaypal({ totalPrice }) {
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
                description: "Some product",
                amount: {
                  currency_code: "ILS",
                  value: 20,
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
