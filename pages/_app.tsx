import {AppProps}      from 'next/app'
import Layout          from '@components/Layout'
import {ThemeProvider} from '@material-ui/core'
import theme           from '../theme'
import '../theme/stylesheetsGlobal.css'

export function reportWebVitals(metric: any){
	// console.log(metric)
}

function MyApp({Component, pageProps}: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<Component {...pageProps} />
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