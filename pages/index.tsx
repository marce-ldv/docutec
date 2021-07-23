import React, { FunctionComponent } from 'react';
import { CustomTheme } from '@theme/index';
import Aside from '@components/Aside';
import ProductsSection from '@components/ProductsSection';

interface Props {
}

const Home: FunctionComponent<Props> = (props) => {

	return (
		<div>
			{/* <div className={classes.header}>
				<img src="/assets/landing.png" width="100%" alt="header" />
			</div> */}
			<Aside />
			<section>
				<div style={{ textAlign: 'center' }}>
					<div>
						<h1>Bienvenidos.</h1>
					</div>
					<div>
						<h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dolorem!</h5>
					</div>
				</div>
			</section>
			<ProductsSection />
		</div>
	);
};

export default Home;