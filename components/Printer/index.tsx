import React, {FunctionComponent} from 'react';
import {Typography}               from '@material-ui/core';


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
		<div className="container">
			<Typography>Image: {product?.image}</Typography>
			<Typography>Name: {product?.name}</Typography>
			<Typography>Price: {product?.price}</Typography>
			<Typography>Sku: {product?.sku}</Typography>
			<style jsx>{`
        .container {
          margin: 30px 0;
        }
      `}</style>
		</div>
	);
};

export default Printer;