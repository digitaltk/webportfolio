import Preloader from "@/src/components/Preloader";
import Switcher from "@/src/components/Switcher";
import SalimovHead from "@/src/SalimovHead";
import { Analytics } from '@vercel/analytics/react';

import "@/styles/globals.css";
import { Fragment } from "react";

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <SalimovHead />
      <Switcher />
      <Preloader />
      <Component {...pageProps} />
            <Analytics />

    </Fragment>
  );
};
export default App;
