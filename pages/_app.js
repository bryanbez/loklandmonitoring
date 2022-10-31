import { store } from "../app/store";
import AppNavbar from "../partials/navbar";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="container px-4">
        <Helmet>
          <meta charset="UTF-8" />
          <meta name="description" content="Land Development Points Tracker" />
          <meta
            name="keywords"
            content="league of kingdom, loklanddev, development points lok, land program league of kingdoms, land program nft"
          />
        </Helmet>
        <AppNavbar />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
