import React, {FunctionComponent} from 'react';
import {makeStyles}               from '@material-ui/core/styles';
import {CustomTheme}              from '@theme/index';
import Aside                      from '@components/Aside';

interface OwnProps {
}

type Props = OwnProps;

const Home: FunctionComponent<Props> = (props) => {

	const useStyles = makeStyles<CustomTheme>((theme) =>
		({
			header: {
				height: '400px',
				overflow: 'hidden',
			}
		})
	);

	const classes = useStyles();

	return (
		<div>
			<div className={classes.header}>
				<img src="/assets/landing.jpg" width="100%" alt="header" />
			</div>
			<Aside />
		</div>
	);
};

export default Home;