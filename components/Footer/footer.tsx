import React, {FunctionComponent} from 'react';
import CssBaseline                from '@material-ui/core/CssBaseline';
import Typography                 from '@material-ui/core/Typography';
import {makeStyles}               from '@material-ui/core/styles';
import Container                  from '@material-ui/core/Container';
import Link                       from '@material-ui/core/Link';
import {CustomTheme}              from '@theme/index';

interface OwnProps {
}

type Props = OwnProps;

const useStyles = makeStyles<CustomTheme>((theme) =>
	({
		root: {
			display: 'flex',
			flexDirection: 'column',
			minHeight: '100vh',
		},
		main: {
			marginTop: theme.spacing(8),
			marginBottom: theme.spacing(2),
		},
		footer: {
			padding: theme.spacing(3, 2),
			marginTop: 'auto',
			backgroundColor:
				theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
		},
	})
);

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const Footer: FunctionComponent<Props> = (props) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CssBaseline/>
			<footer className={classes.footer}>
				<Container maxWidth="sm">
					<Typography variant="body1">Mas informacion acerca de Docutec mdp.</Typography>
					<Copyright/>
				</Container>
			</footer>
		</div>
	);
};

export default Footer;