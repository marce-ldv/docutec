import React from 'react'
import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'
import ServerStyleSheets from '@material-ui/styles/ServerStyleSheets'

class MyDocument extends Document {

	static async getInitialProps(ctx: DocumentContext) {

		const sheets = new ServerStyleSheets()
		const originalRenderPage = ctx.renderPage
		ctx.renderPage = () => originalRenderPage({
			enhanceApp: (App: any) => (props: any) => sheets.collect(<App {...props} />)
		})

		const initialProps = await Document.getInitialProps(ctx)
		return {...initialProps, styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],}
	}

	render() {
		return (
			<Html lang="es">
				<Head title={'Docutec Mdp'}>
					<meta name="google-site-verification" content="40xpsLPhX8g30ImASZvllemNkbwj05_GGTVbqiabX8s"/>
					<meta name="msvalidate.01" content="8374C2018616D0808646CCCAC5E579A7"/>
					<meta name="description"
								content="Servicio tecnico de reparacion y manimiento de impresoras y fotocopiadoras."/>
					<link rel="icon" href="/assets/favicon.ico" type="image/x-icon"/>
					<title>Docutec Mdp</title>
					{/*pwa meta tags*/}
					<meta name='application-name' content='PWA App'/>
					<meta name='apple-mobile-web-app-capable' content='yes'/>
					<meta name='apple-mobile-web-app-status-bar-style' content='default'/>
					<meta name='apple-mobile-web-app-title' content='PWA App'/>
					<meta name='description' content='Best PWA App in the world'/>
					<meta name='format-detection' content='telephone=no'/>
					<meta name='mobile-web-app-capable' content='yes'/>
					<meta name='msapplication-config' content='/static/icons/browserconfig.xml'/>
					<meta name='msapplication-TileColor' content='#2B5797'/>
					<meta name='msapplication-tap-highlight' content='no'/>
					<meta name='theme-color' content='#000000'/>

					<link rel='apple-touch-icon' sizes='180x180' href='/static/icons/apple-touch-icon.png'/>
					<link rel='icon' type='image/png' sizes='32x32' href='/static/icons/favicon-32x32.png'/>
					<link rel='icon' type='image/png' sizes='16x16' href='/static/icons/favicon-16x16.png'/>
					<link rel='manifest' href='/static/manifest.json'/>
					<link rel='mask-icon' href='/static/icons/safari-pinned-tab.svg' color='#5bbad5'/>
					<link rel='shortcut icon' href='/static/icons/favicon.ico'/>
					<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'/>

					<meta name='twitter:card' content='summary'/>
					<meta name='twitter:url' content='https://yourdomain.com'/>
					<meta name='twitter:title' content='PWA App'/>
					<meta name='twitter:description' content='Best PWA App in the world'/>
					<meta name='twitter:image' content='https://yourdomain.com/static/icons/android-chrome-192x192.png'/>
					<meta name='twitter:creator' content='@DavidWShadow'/>
					<meta property='og:type' content='website'/>
					<meta property='og:title' content='PWA App'/>
					<meta property='og:description' content='Best PWA App in the world'/>
					<meta property='og:site_name' content='PWA App'/>
					<meta property='og:url' content='https://yourdomain.com'/>
					<meta property='og:image' content='https://yourdomain.com/static/icons/apple-touch-icon.png'/>
				</Head>
				<body>
				<Main/>
				<NextScript/>
				</body>
			</Html>
		)
	}
}

export default MyDocument