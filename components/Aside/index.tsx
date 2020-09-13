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
			marginLeft: 'auto',
			marginRight: 'auto',
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
				<Grid item xs={4} className={classes.video}>
					<ReactPlayer url="https://www.youtube.com/watch?v=BzJDMguJw9U" playing={true}/>
				</Grid>
				<Grid item xs={6} className={classes.wrapAside}>
					<Typography variant="h2">Bienvenidos a Docutec</Typography>
					<Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque autem dolore, eaque laborum
						rem veniam? Aperiam aspernatur hic illum laborum mollitia recusandae sed sequi sunt veniam voluptates!
						Distinctio eaque est explicabo ipsum reiciendis sapiente temporibus veniam! Aliquid culpa deleniti dolorum
						eum id incidunt molestiae nam nesciunt odit porro quia, tempora. Aut numquam omnis placeat recusandae,
						repudiandae sequi velit vero?</Typography>
				</Grid>
			</Grid>

		</section>
	);
};

export default Aside;