import React, { FunctionComponent } from 'react';
import { CustomTheme } from '@theme/index';

interface Props {
}

const Header: FunctionComponent<Props> = (props) => {
	return (
		<div>
			<section>
				<h2>Bienvenidos a Docutec Mdp</h2>
				<p>La calidad de nuestro servicio es uno de los aspectos más importantes de nuestro crecimiento, por lo
					que de forma continua desarrollamos programas y procesos internos de mejora</p>
			</section>
			<div>
				<picture>
					<source srcSet="/assets/5335.webp" />

					{/*fallback*/}
					<img src="/assets/5335.png" width={150} alt="5335" />
				</picture>
			</div>
		</div>
	);
};

export default Header;