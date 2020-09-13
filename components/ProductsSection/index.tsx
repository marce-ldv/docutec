import React, {FunctionComponent, useState, useEffect} from 'react';
import {Grid, Typography}                              from '@material-ui/core';
import Printer                                         from '@components/Printer';
import {makeStyles}                                    from '@material-ui/core/styles';
import {CustomTheme}                                   from '@theme/index';


interface OwnProps {
}

type Props = OwnProps;

const useStyles = makeStyles<CustomTheme>(() =>
	({
		root: {
			marginTop: '30px',
		},
		productsContainer: {
			background: '#eceaea',
			padding: '10px',
		},
	})
);

const ProductsSection: FunctionComponent<Props> = (props) => {
	const classes = useStyles();
	const [products, setProducts] = useState<TProduct[]>([])

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await window.fetch('api/printers')
				const {data} = await response.json()
				setProducts(data)
			} catch (error) {
				setProducts([])
			}
		}

		fetchProducts()
	}, [])

	return (
		<div className={classes.root}>
			<Grid container xs={12} justify={'center'}>
				<div>
					<Typography variant="h2">Nuestros productos</Typography>
					<Typography>Far far away, behind the word mountains, far from the countries Vokalia and
						Consonantia</Typography>
				</div>
				<Grid item xs={8} className={classes.productsContainer}>
					<Grid container>
						{products?.map((product, key) => (
							<Grid key={key} item xs={12} md={3}>
								<Printer
									id={product.id}
									name={product.name}
									price={product.price}
									image={product.image}
									sku={product.sku}
									attributes={product.attributes}
								/>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default ProductsSection;