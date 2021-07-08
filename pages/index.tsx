import React, { FunctionComponent } from 'react';
// import { lightTheme, darkTheme, GlobalStyles } from '@theme/index';

// import Aside                      from '@components/Aside';
// import ProductsSection            from '@components/ProductsSection';

interface OwnProps {
}

type Props = OwnProps;

const Home: FunctionComponent<Props> = (props) => {


	// const useStyles = makeStyles<CustomTheme>((theme) =>
	// 	({
	// 		header: {
	// 			height: '400px',
	// 			overflow: 'hidden',
	// 		}
	// 	})
	// );

	return (
		<div>
			<div>test</div>
			{/* <div>
				<img src="/assets/landing.png" width="100%" alt="header" />
			</div> */}
			{/* <Aside />
			<ProductsSection /> */}
		</div>
	);
};

export default Home;