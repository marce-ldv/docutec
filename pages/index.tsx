import React, { FunctionComponent } from 'react';
import Carousel from '@organisms/Carousel';
import OurServices from '@organisms/OurServices';
import ProductsSection from '@organisms/ProductsSection';

interface Props {
}

const Home: FunctionComponent<Props> = (props) => {

	return (
		<>
			<Carousel />
			<OurServices />
			<ProductsSection />
		</>
	);
};

export default Home;