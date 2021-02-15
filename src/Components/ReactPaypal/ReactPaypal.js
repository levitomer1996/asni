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
                description: "Some product",
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
            setPaypalTransectionCompleted({
              isComplete: true,
              PaypalTransection: order,
            });
          }
          console.log(order);
          const { payer, id, create_time, purchase_units } = order;
          const { given_name, surname, payer_id } = payer;
          console.log(payer, id, create_time, purchase_units);
          asni_server.post("/addtransaction", {
            id,
            create_time,
            totalPrice,
            given_name,
            surname,
            payer_id,
            products,
          });
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
