import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CustomTheme } from '@theme/index';


interface OwnProps {
}

type Props = OwnProps;

const useStyles = makeStyles<CustomTheme>((theme) =>
({
	root: {
		marginTop: '30px',
		display: 'flex',
		width: '100%',
		height: '100%',
	},
	section: {

	},
	rightSide: {
		flex: '0 0 50%',
	}
})
);

const Aside: FunctionComponent<Props> = (props) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<section className={classes.section}>
				<h2>Bienvenidos a Docutec Mdp</h2>
				<p>La calidad de nuestro servicio es uno de los aspectos más importantes de nuestro crecimiento, por lo
					que de forma continua desarrollamos programas y procesos internos de mejora</p>
			</section>
			<div className={classes.rightSide}>
				<picture>
					<source srcSet="/assets/5335.webp" />

					{/*fallback*/}
					<img src="/assets/5335.png" width={150} alt="5335" />
				</picture>
			</div>
		</div>
	);
};

export default Aside;