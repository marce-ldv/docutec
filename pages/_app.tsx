import React, { useState, useEffect } from 'react';
import {AppProps} from 'next/app'
import {ThemeProvider} from 'styled-components'

import Layout from '@components/Layout'
import { lightTheme, darkTheme, GlobalStyles } from '@theme/index'


// export function reportWebVitals(metric: any){
// 	// console.log(metric)
// }

function MyApp({Component, pageProps}: AppProps) {
	const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

  // Set user’s preference  as its default
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

	return (
    <div>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Layout>
          <GlobalStyles />
          <button onClick={toggleTheme}>
            {isDarkTheme ?
              <span aria-label="Light mode" role="img">🌞</span> :
              <span aria-label="Dark mode" role="img">🌜</span>}
          </button>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
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