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
					<meta name="google-site-verification" content="wqw9WP6IYiqLQydb6nWyeiqWGeCf5nzFE2KMFXPuog0" />
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

					<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
					<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
					<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
					<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
					<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
					<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
					<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
					<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
					<link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"/>
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
					<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
					<link rel="manifest" href="/manifest.json"/>
					<meta name="msapplication-TileColor" content="#ffffff"/>
					<meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
					<meta name="theme-color" content="#ffffff"/>


					<meta name='twitter:card' content='summary'/>
					<meta name='twitter:url' content='https://docutec.vercel.app'/>
					<meta name='twitter:title' content='Docutec Mdp'/>
					<meta name='twitter:description'
								content='Servicio tecnico de reparacion y manimiento de impresoras y fotocopiadoras.'/>
					<meta name='twitter:image' content='https://docutec.vercel.app/static/icons/android-chrome-192x192.png'/>
					<meta name='twitter:creator' content='@docutec'/>
					<meta property='og:type' content='website'/>
					<meta property='og:title' content='Docutec Mdp'/>
					<meta property='og:description'
								content='Servicio tecnico de reparacion y manimiento de impresoras y fotocopiadoras.'/>
					<meta property='og:site_name' content='Docutec'/>
					<meta property='og:url' content='https://docutec.vercel.app'/>
					<meta property='og:image' content='https://docutec.vercel.app/static/icons/apple-touch-icon.png'/>

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
