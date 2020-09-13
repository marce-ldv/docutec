import React, {FunctionComponent} from 'react';
import Link                       from 'next/link';
import {makeStyles}               from '@material-ui/core/styles';
import AppBar                     from '@material-ui/core/AppBar';
import Toolbar                    from '@material-ui/core/Toolbar';
import {CustomTheme}              from '../../theme';
import {Typography}               from '@material-ui/core';


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
			width: 100,
		}
	})
);

const Navbar: FunctionComponent<Props> = (props) => {

	const classes = useStyles();

	return (
		<AppBar position="fixed" className={classes.root}>
			<Toolbar className={classes.toolbar}>
				<div className={classes.logo}>
					<Link href="/">
						<img src="/assets/docutec2.png" width={100} alt="docutec"/>
					</Link>
				</div>
				<Link href="/">
					<Typography className={classes.title}>Inicio</Typography>
				</Link>
				<Link href="/contact">
					<Typography className={classes.title}>Contacto</Typography>
				</Link>
				<Link href="/about">
					<Typography className={classes.title}>Acerca de</Typography>
				</Link>
			</Toolbar>
		</AppBar>
	)
};

export default Navbar;