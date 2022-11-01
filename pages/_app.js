import { store } from "../app/store";
import AppNavbar from "../partials/navbar";
import "../styles/globals.css";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppNavbar />
      <div className="container px-4">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
