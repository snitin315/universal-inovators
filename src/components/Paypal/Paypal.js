import * as React from 'react'
import { PayPalButton } from "react-paypal-button-v2";

export default class Paypal extends React.Component {
  render() {
    return (
      <PayPalButton
        amount="1.0"
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          console.log(details.payer.name.given_name)

          // OPTIONAL: Call your server to save the transaction
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderId: data.orderID
            })
          });
        }}
        options={{
          clientId: "Aa_91hR2jOcIaGnsod7bHs8Kf0_sb3SUAaLVSpFZPzJbkFrn9lB5mgpsjRd7kpiNWbSbNh6JG6yOTVA1",
          currency: 'INR'
        }}
      />
    );
  }
}