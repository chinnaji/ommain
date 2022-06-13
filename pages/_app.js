import "../styles/globals.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function MyApp({ Component, pageProps }) {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AUvvx7QL3Ix2xryXdVGT8TCuyMT6DwHZNa47ETTQ_KTT1YFyuwJaOsRxJ9ywQqKyxP-EPWi_4aKkkrMo",
        // "disable-funding": "credit,card,p24",
        "disable-funding": "p24",
        currency: "USD",
      }}
    >
      <Component {...pageProps} />
    </PayPalScriptProvider>
  );
}

export default MyApp;
