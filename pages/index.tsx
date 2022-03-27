import React, { FunctionComponent } from 'react';
import { CustomTheme } from '@theme/index';
import Aside from '@components/Aside';
import ProductsSection from '@components/ProductsSection';

interface Props {
}

const Home: FunctionComponent<Props> = (props) => {

	return (
		<div>
			{/* <Aside /> */}
			<section>
				<div>
					<h1>Bienvenidos.</h1>
				</div>
				<div>
					<h5>Este sitio esta en desarrollo!</h5>
				</div>
			</section>
			{/* <ProductsSection /> */}
		</div>
	);
};

export default Home;