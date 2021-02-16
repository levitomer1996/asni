import React, { useRef, useEffect, useState, useContext } from "react";
import PaymentContext from "../../context/PaymentContext";
import CartContext from "../../context/CartContext";
import asni_server from "../../api/asni_server";
export default function ReactPaypal() {
  const paypal = useRef();
  const { setPaypalTransectionCompleted } = useContext(PaymentContext);
  const { cartState } = useContext(CartContext);
  const { products, totalPrice } = cartState;
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "חבילת ישיבות אסני",
                amount: {
                  currency_code: "ILS",
                  value: totalPrice,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          if (order.status === "COMPLETED") {
            const { payer, id, create_time, purchase_units } = order;
            const { name, payer_id, adress, email_address } = payer;
            const { given_name, surname } = name;
            console.log({
              given_name,
              surname,
              id,
              email_address,
              products,
              totalPrice,
            });
            setPaypalTransectionCompleted({
              given_name,
              surname,
              id,
              email_address,
              products,
              totalPrice,
            });

            asni_server.post("/addtransaction", {
              id,
              create_time,
              totalPrice,
              given_name,
              surname,
              payer_id,
              products,
              email: email_address,
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
