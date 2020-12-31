import React, {FunctionComponent} from 'react';
import Link                       from 'next/link';
import {makeStyles}               from '@material-ui/core/styles';
import AppBar                     from '@material-ui/core/AppBar';
import Toolbar                    from '@material-ui/core/Toolbar';
import {CustomTheme}           from '../../theme';
import {Container, Typography} from '@material-ui/core';


interface OwnProps {
}

type Props = OwnProps;

const useStyles = makeStyles<CustomTheme>((theme) =>
	({
		root: {
			background: '#fff',
			width: '100%',
		},
		title: {
			marginRight: theme.spacing(2),
			color: theme.colors.main,
			cursor: 'pointer',
		},
		toolbar: {
			display: 'flex',
		},
		logo: {
			flexGrow: 1,
		}
	})
);

const Navbar: FunctionComponent<Props> = (props) => {

	const classes = useStyles();

	return (
		<AppBar position="fixed" className={classes.root}>
			<Container>
			<Toolbar className={classes.toolbar}>
				<div className={classes.logo}>
					<Link href="/">
						<picture>
							<source srcSet="/assets/docutec2.webp" />

							{/*fallback*/}
							<img src="/assets/docutec2.png" width={150} alt="docutec"/>
						</picture>
					</Link>
				</div>
				<Link href="/">
					<Typography className={classes.title}>Inicio</Typography>
				</Link>
				<Link href="/products">
					<Typography className={classes.title}>Productos</Typography>
				</Link>
				<Link href="/contact">
					<Typography className={classes.title}>Contacto</Typography>
				</Link>
				<Link href="/about">
					<Typography className={classes.title}>Acerca de</Typography>
				</Link>
			</Toolbar>
			</Container>
		</AppBar>
	)
};

export default Navbar;