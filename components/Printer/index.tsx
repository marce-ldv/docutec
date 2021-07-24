import React, { FunctionComponent } from 'react';
import { CustomTheme } from '@theme/index';

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

const Printer: FunctionComponent<Props> = (product) => {

	return (
		<div className="card-container">
			<div className="card-header">
				<div className="card-image">
					<img src={`/assets/${product?.image}`} alt={product.name} />
				</div>
			</div>
			<div className="card-content">
				<div className="card-title">{product.name}</div>
				<div className="card-subtitle">{product.price}</div>
				{/* <div className="card-description">{product.attributes?.description}</div> */}
			</div>
		</div>
	);
};

export default Printer;

{/* <CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}>
						W
					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
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
			</CardContent> */}