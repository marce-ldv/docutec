import React                                                     from 'react'
import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'
import ServerStyleSheets                                         from '@material-ui/styles/ServerStyleSheets'

class MyDocument extends Document {

	static async getInitialProps(ctx: DocumentContext) {

		const sheets = new ServerStyleSheets()
		const originalRenderPage = ctx.renderPage
		ctx.renderPage = () => originalRenderPage({enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)})

		const initialProps = await Document.getInitialProps(ctx)
		return {...initialProps, styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],}
	}

	render() {
		return (
			<Html lang="es">
				<Head title={'Docutec Mdp'}>
					<meta name="google-site-verification" content="40xpsLPhX8g30ImASZvllemNkbwj05_GGTVbqiabX8s"/>
					<meta name="msvalidate.01" content="8374C2018616D0808646CCCAC5E579A7"/>
					<meta name="description" content="Servicio tecnico de reparacion y manimiento de impresoras y fotocopiadoras."/>
					<title>Docutec Mdp</title>
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