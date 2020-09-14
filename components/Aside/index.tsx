import React, {FunctionComponent} from 'react';
import ReactPlayer                from 'react-player'
import {Grid, Typography}         from '@material-ui/core';
import {makeStyles}               from '@material-ui/core/styles';
import {CustomTheme}              from '@theme/index';


interface OwnProps {
}

type Props = OwnProps;

const useStyles = makeStyles<CustomTheme>((theme) =>
	({
		root: {
			marginTop: '30px',
		},
		video: {},
		wrapAside: {
			padding: '20px',
		},
		container: {}
	})
);

const Aside: FunctionComponent<Props> = (props) => {

	const classes = useStyles();

	return (
		<section className={classes.root}>
			<Grid container justify={'center'}>
				<Grid item xs={12} md={6} lg={6} className={classes.wrapAside}>
					<Typography variant="h2">Bienvenidos a Docutec Mdp</Typography>
					<Typography>La calidad de nuestro servicio es uno de los aspectos más importantes de nuestro crecimiento, por lo que de forma continua desarrollamos programas y procesos internos de mejora</Typography>
				</Grid>
			</Grid>

		</section>
	);
};

export default Aside;