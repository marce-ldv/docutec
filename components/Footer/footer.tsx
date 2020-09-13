import React, {FunctionComponent} from 'react';
import {makeStyles}               from '@material-ui/core/styles';
import {CustomTheme}              from '@theme/index';
import {Grid}                     from '@material-ui/core';


interface OwnProps {
}

type Props = OwnProps;

const useStyles = makeStyles<CustomTheme>((theme) =>
	({
		root: {
			textAlign: 'center',
			background: theme.colors.main,
			width: '100%',
			height: '100px',
			bottom: 0,
			marginTop: '100px'
		},
	})
);

const Footer: FunctionComponent<Props> = (props) => {
	const classes = useStyles();

	return (
		<footer className={classes.root}>
			<Grid container xs={12} justify={'center'}>
				<Grid container xs={8}>
					<Grid xs={4}>
						Acerca de
					</Grid>
					<Grid xs={4}>
						Contactanos
					</Grid>
					<Grid xs={4}>
						Ayuda
					</Grid>
				</Grid>
			</Grid>
		</footer>
	);
};

export default Footer;