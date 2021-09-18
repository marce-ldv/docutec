import React, { FunctionComponent, useState, useEffect } from 'react';

import Printer from '@components/molecules/Printer';
import Database from '@database';
import Button from '@atoms/Button'
import { productsContainer, productsHeader, productsSection } from './styles.module.scss';

interface Props {
}

const ProductsSection: FunctionComponent<Props> = (props) => {
  const [products, setProducts] = useState<TProduct[]>([])
  const db = new Database();

  // TODO: update to custom hooks
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

  const handleProductsFilter = (productType: string): void => {
    // TODO: filter products by type
    const filteredProducts = [...products];
    setProducts([]);
  }

  return (
    <section className={productsSection}>
      <div className={productsHeader}>
        <h2>Productos con los que trabajamos</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <div>
          <Button color={'primary'} onClick={() => handleProductsFilter('printer')}>Impresoras</Button>
          <Button color={'danger'} onClick={() => handleProductsFilter('scanner')}>Scanners</Button>
        </div>
      </div>

      <div className={productsContainer}>
        {products?.map((product, key) => (
          <Printer
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            sku={product.sku}
            attributes={product.attributes}
            key={key}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;