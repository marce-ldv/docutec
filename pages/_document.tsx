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

					<link rel='manifest' href='/manifest.json'/>
					<link rel='shortcut icon' href='/assets/favicon.ico'/>
					<link rel='apple-touch-icon' sizes='180x180' href='/assets/logo.webp' />
					<link rel='icon' type='image/png' sizes='32x32' href='/assets/logo.webp' />
					<link rel='icon' type='image/png' sizes='16x16' href='/assets/logo.webp' />
					<link rel='mask-icon' href='/assets/logo.webp' color='#5bbad5' />
					<link rel='shortcut icon' href='/assets/favicon.ico' />


					<meta name='twitter:card' content='summary' />
					<meta name='twitter:url' content='https://docutec.vercel.app' />
					<meta name='twitter:title' content='Docutec Mdp' />
					<meta name='twitter:description' content='Servicio tecnico de reparacion y manimiento de impresoras y fotocopiadoras.' />
					<meta name='twitter:image' content='https://docutec.vercel.app/static/icons/android-chrome-192x192.png' />
					<meta name='twitter:creator' content='@DavidWShadow' />
					<meta property='og:type' content='website' />
					<meta property='og:title' content='Docutec Mdp' />
					<meta property='og:description' content='Servicio tecnico de reparacion y manimiento de impresoras y fotocopiadoras.' />
					<meta property='og:site_name' content='PWA App' />
					<meta property='og:url' content='https://docutec.vercel.app' />
					<meta property='og:image' content='https://docutec.vercel.app/static/icons/apple-touch-icon.png' />
					
				</Head>
				<body>
				<Main/>
				<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument