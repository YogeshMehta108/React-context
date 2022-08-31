import { PlaceProvider } from "../context/Places";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PlaceProvider>
      <Component {...pageProps} />
    </PlaceProvider>
  );
}

export default MyApp;
