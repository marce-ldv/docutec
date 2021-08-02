import React, { useState } from 'react'
import { AppProps } from 'next/app'
import Layout from '@components/Layout'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.scss';
import theme from '../theme'

export function reportWebVitals(metric: any) {
  // console.log(metric)
}

function MyApp({ Component, pageProps }: AppProps) {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;