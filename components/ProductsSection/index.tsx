import React, { FunctionComponent, useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Printer from '@components/Printer';
import { makeStyles } from '@material-ui/core/styles';
import { CustomTheme } from '@theme/index';
import Database from "@database";

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
    // padding: '10px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(15rem, 1fr))',
    gap: '1rem',
    gridAutoFlow: 'dense',
    gridAutoRows: '30rem',
  },
})
);

const ProductsSection: FunctionComponent<Props> = (props) => {
  const classes = useStyles();
  const [products, setProducts] = useState<TProduct[]>([])
  const db = new Database();

  useEffect(() => {
    const fetchProducts = () => {
      try {
        const data = db.getAll();
        setProducts(data)
      } catch (error) {
        setProducts([])
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className={classes.root}>
      <div>
        <h2>Nuestros productos</h2>
      </div>
      <div className={classes.productsContainer}>
        {products?.map((product, key) => (
          <Printer
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            sku={product.sku}
            attributes={product.attributes}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;