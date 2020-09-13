import React, {FunctionComponent}        from 'react';
import Link                              from 'next/link';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar                            from '@material-ui/core/AppBar';
import Toolbar                           from '@material-ui/core/Toolbar';
import Typography                        from '@material-ui/core/Typography';
import Button                            from '@material-ui/core/Button';
import IconButton                        from '@material-ui/core/IconButton';
import MenuIcon                          from '@material-ui/icons/Menu';
import {CustomTheme}                     from '../../theme';

interface OwnProps {
}

type Props = OwnProps;

const useStyles = makeStyles<CustomTheme>((theme) =>
	({
		root: {
			flexGrow: 1,
			background: theme.colors.main,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
	})
);

const Navbar: FunctionComponent<Props> = (props) => {

	const classes = useStyles();

	return (
		<>
			<AppBar position="static" className={classes.root}>
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon/>
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Menu
					</Typography>
					{/*<Link href="/">*/}
					{/*	<a>Home</a>*/}
					{/*</Link>*/}
					{/*<Link href="/about">*/}
					{/*	<a>About</a>*/}
					{/*</Link>*/}
					<Button color="inherit">Asd</Button>
				</Toolbar>
			</AppBar>
		</>
	)
};

export default Navbar;