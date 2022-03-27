import React, { FC } from 'react';
import { CustomTheme } from '@theme/index';
import Header from '@components/Header';
import ProductsSection from '@components/ProductsSection';

interface Props {}

const Home: FC<Props> = () => {

	return (
		<div>
			{/* <Header /> */}
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
