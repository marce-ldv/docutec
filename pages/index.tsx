import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CustomTheme } from '@theme/index';
import Aside from '@components/Aside';
import ProductsSection from '@components/ProductsSection';

interface OwnProps {
}

type Props = OwnProps;

const Home: FunctionComponent<Props> = (props) => {

	const useStyles = makeStyles<CustomTheme>((theme) =>
		({
			header: {
				height: '400px',
				overflow: 'hidden',
			},
			sectionContainer: {
				backgroundColor: 'tomato',
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
			}
		})
	);

	const classes = useStyles();

	return (
		<div>
			{/* <div className={classes.header}>
				<img src="/assets/landing.png" width="100%" alt="header" />
			</div> */}
			<Aside />
			<section className={classes.sectionContainer}>
				<div style={{ textAlign: 'center' }}>
					<div>
						<h1>Lorem ipsum dolor sit amet.</h1>
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