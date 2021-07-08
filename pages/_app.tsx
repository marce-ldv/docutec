import React, { useState } from 'react'
import { AppProps } from 'next/app'
import Layout from '@components/Layout'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import Switch from '@material-ui/core/Switch'
import {
  orange,
  lightBlue,
  deepPurple,
  deepOrange
} from '@material-ui/core/colors'

import theme from '../theme'
import '../theme/stylesheetsGlobal.css'

export function reportWebVitals(metric: any) {
  // console.log(metric)
}

function MyApp({ Component, pageProps }: AppProps) {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];
  const navbarBackground = darkState ? '#000' : '#fff';

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
        navbar: navbarBackground,
      },
      secondary: {
        main: mainSecondaryColor,
        navbar: navbarBackground,
      }
    }
  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Layout>
        <Component {...pageProps} />
        <Switch checked={darkState} onChange={handleThemeChange} />
      </Layout>
    </ThemeProvider>
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

export default MyApp