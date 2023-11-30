// PayPalButton.js
import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalButton = ({ totalAmount, onSuccess }) => {
  return (
    <PayPalScriptProvider options={{ 'client-id': 'AY4glB9bZ_t5gx1qFuke2scu-6vGVHwM3wO-4tTmVxHKKDE2_A7Ah-Gz_DRdY-hjp86x4b6djjXM1_jX' }}>
      <PayPalButtons
        style={{ layout: 'horizontal' }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: totalAmount,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(function (details) {
            onSuccess(); // Handle successful payment
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
