import React                                                     from 'react'
import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'
import ServerStyleSheets                                         from '@material-ui/styles/ServerStyleSheets'

const APP_NAME = 'Docutec Mdp'
const APP_DESCRIPTION = 'Servicio tecnico de reparacion y manimiento de impresoras y fotocopiadoras.'

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
					<meta name='application-name' content={APP_NAME}/>
					<meta name='apple-mobile-web-app-capable' content='yes'/>
					<meta name='apple-mobile-web-app-status-bar-style' content='default'/>
					<meta name='apple-mobile-web-app-title' content={APP_NAME}/>
					<meta name='description' content={APP_DESCRIPTION}/>
					<meta name='format-detection' content='telephone=no'/>
					<meta name='mobile-web-app-capable' content='yes'/>
					<meta name='theme-color' content='#FFFFFF'/>
					{/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}
					{/* <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' /> */}

					<link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png'/>
					<link rel='manifest' href='/manifest.json'/>
					<link rel='shortcut icon' href='/assets/favicon.ico'/>
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