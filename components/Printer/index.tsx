import React, {FunctionComponent} from 'react';
import {Typography}               from '@material-ui/core';
import {makeStyles}               from '@material-ui/core/styles';
import {CustomTheme}              from '@theme/index';
import clsx                       from 'clsx';
import Card                       from '@material-ui/core/Card';
import CardHeader                 from '@material-ui/core/CardHeader';
import CardMedia                  from '@material-ui/core/CardMedia';
import CardContent                from '@material-ui/core/CardContent';
import CardActions                from '@material-ui/core/CardActions';
import Avatar                     from '@material-ui/core/Avatar';
import IconButton                 from '@material-ui/core/IconButton';
import {red}                      from '@material-ui/core/colors';
import FavoriteIcon               from '@material-ui/icons/Favorite';
import ShareIcon                  from '@material-ui/icons/Share';
import MoreVertIcon               from '@material-ui/icons/MoreVert';


interface OwnProps {
	id: string
	image?: string
	name: string
	price?: number
	sku?: string
	attributes?: Attributes
}

interface Attributes {
	description: string
}

type Props = OwnProps;

const useStyles = makeStyles<CustomTheme>((theme) =>
	({
		root: {
			margin: '5px',
			padding: '10px',
			maxWidth: 345,
		},
		media: {
			height: 0,
			paddingTop: '56.25%', // 16:9
		},
		expand: {
			transform: 'rotate(0deg)',
			marginLeft: 'auto',
			transition: theme.transitions.create('transform', {
				duration: theme.transitions.duration.shortest,
			}),
		},
		expandOpen: {
			transform: 'rotate(180deg)',
		},
		avatar: {
			backgroundColor: red[500],
		},
	})
);

const Printer: FunctionComponent<Props> = (product) => {
	const classes = useStyles();

	return (
			<Card className={classes.root}>
				<CardHeader
					avatar={
						<Avatar aria-label="recipe" className={classes.avatar}>
							W
						</Avatar>
					}
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon/>
						</IconButton>
					}
					title={product?.name}
					subheader={`$${product?.price}`}
				/>
				<CardMedia
					className={classes.media}
					image={`/assets/${product?.image}`}
					title={product?.name}
				/>
				<CardContent>
					<Typography variant="body2" color="textSecondary" component="p">
						{product.attributes?.description}
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label="add to favorites">
						<FavoriteIcon/>
					</IconButton>
					<IconButton aria-label="share">
						<ShareIcon/>
					</IconButton>
				</CardActions>
			</Card>
	);
};

export default Printer;