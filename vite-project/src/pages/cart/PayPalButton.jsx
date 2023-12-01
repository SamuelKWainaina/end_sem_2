import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import React, { useRef, useEffect } from 'react';

export default function Paypal() {
  const paypalRef = useRef(null);

  useEffect(() => {
    const createOrder = async (data, actions, err) => {
      return actions.order.create({
        intent: 'CAPTURE',
        purchase_units: [
          {
            description: 'Cool looking table',
            amount: {
              currency_code:'USD',
              value: 10000.0,
            },
          },
        ],
      });
    };

    const onApprove = async (data, actions) => {
      const order = await actions.order.capture();
      console.log(order);
    };

    const onError = (err) => {
      console.log(err);
    };

    window.paypal
      .Buttons({
        createOrder,
        onApprove,
        onError,
      })
      .render(paypalRef.current);
  }, []);

  return (
    <div>
      <PayPalScriptProvider>
        <PayPalButtons ref={paypalRef} />
      </PayPalScriptProvider>
    </div>
  );
}
