import React, { useEffect } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
function PaymentButton({ fee }) {
  // const amount = fee;
  const currency = "USD";
  const style = { layout: "vertical" };

  async function paySpeaker(data) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(data);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    // send payment details to payment server
    fetch("/api/paySpeaker", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <div className="w-fill text-center">
      {" "}
      <PayPalButtons
        disabled={false}
        forceReRender={[fee, currency, style]}
        fundingSource={undefined}
        createOrder={(res, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: fee,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function (orderData) {
            // Your code here after capture the order
            // notify payer pament is successful
            alert("payment Successful");

            const { payer, purchase_units } = orderData;
            // get total amount paid
            const [
              {
                amount: { value },
              },
            ] = purchase_units;
            // payment info to be sent to server
            const data = { payer, value };

            // when payment is successful, inform server to send 90% to speaker
            // completePayment(data);

            console.log(data);
            paySpeaker(data);
            // console.log("orderData", orderData);
          });
        }}
      />
    </div>
  );
}

export default PaymentButton;
