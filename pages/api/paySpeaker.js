// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const paypal = require("@paypal/payouts-sdk");
import { updateSpeakers } from "../../config/firebaseCrud";

export default function handler(req, res) {
  const {
    payer: { name, email, payer_id },
    value,
  } = req.body;

  // amount to be paid to speaker
  // get 90% of the value
  const amountToBePaid = Number(value) * 0.9;

  // Creating an environment
  let clientId =
    "AUvvx7QL3Ix2xryXdVGT8TCuyMT6DwHZNa47ETTQ_KTT1YFyuwJaOsRxJ9ywQqKyxP-EPWi_4aKkkrMo";
  let clientSecret =
    "EHpZQMCgNYpqGaV2l5mG5s8iehQVCOSOXIYF0XX4YICkBfK3phoUCQ3wB_geohIJWwRFXoVcokx7KyhE";
  let environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
  let client = new paypal.core.PayPalHttpClient(environment);

  let requestBody = {
    sender_batch_header: {
      recipient_type: "EMAIL",
      email_message:
        "This is a test transaction - you have been paid to atten a new event",
      note: "Enjoy your Event!!",
      sender_batch_id: "batch_" + new Date().getTime(),
      email_subject: "An event organisation just paid you",
    },
    items: [
      {
        note: `you have been paid ${amountToBePaid}  by ${name} to come and speak at event wth id of ${payer_id} and email of ${email}`,
        amount: {
          currency: "USD",
          value: amountToBePaid,
        },

        // speaker email address
        receiver: "sb-xkxem17107291@personal.example.com",
        sender_item_id: "5FNJLTCZ52LHW",
      },
    ],
  };

  // Construct a request object and set desired parameters
  // Here, PayoutsPostRequest() creates a POST request to /v1/payments/payouts
  let request = new paypal.payouts.PayoutsPostRequest();
  request.requestBody(requestBody);

  // Call API with your client and get a response for your call
  let createPayouts = async function () {
    let response = await client.execute(request);
    updateSpeakers(amountToBePaid);
    // console.log(`Response: ${JSON.stringify(response)}`);
    // If call returns body in response, you can get the deserialized version from the result attribute of the response.
    // console.log(`Payouts Create Response: ${JSON.stringify(response.result)}`);
  };
  // init speaker payment process
  createPayouts();

  //   res.status(200).json({ name: "John Doe" });
}
