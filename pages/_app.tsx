import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { Router } from "next/router";
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  );
}

export default MyApp;
