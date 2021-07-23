import React, { FunctionComponent, useState, useEffect } from 'react';
import Printer from '@components/Printer';
import Database from '@database';

interface Props {
}

const ProductsSection: FunctionComponent<Props> = (props) => {
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
    <section className="products-section">
      <div className="products-header">
        <h2>Nuestros productos</h2>
      </div>
      <div className="products-container">
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