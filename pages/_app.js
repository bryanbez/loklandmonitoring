import { store } from "../app/store";
import AppNavbar from "../partials/navbar";
import "../styles/globals.css";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="container px-4">
        <AppNavbar />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
