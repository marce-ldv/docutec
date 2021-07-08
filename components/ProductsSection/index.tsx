// import React, { FunctionComponent, useState, useEffect } from 'react';
// import { Grid, Typography } from '@material-ui/core';
// import Printer from '@components/Printer';
// import { makeStyles } from '@material-ui/core/styles';
// import { CustomTheme } from '@theme/index';
// import Database from "@database";

// interface OwnProps {
// }

// type Props = OwnProps;

// const useStyles = makeStyles<CustomTheme>(() =>
//   ({
//     root: {
//       marginTop: '30px',
//     },
//     productsContainer: {
//       background: '#eceaea',
//       padding: '10px',
//     },
//   })
// );

// const ProductsSection: FunctionComponent<Props> = (props) => {
//   const classes = useStyles();
//   const [products, setProducts] = useState<TProduct[]>([])
//   const db = new Database();

//   useEffect(() => {
//     const fetchProducts = () => {
//       try {
//         const data = db.getAll();
//         setProducts(data)
//       } catch (error) {
//         setProducts([])
//       }
//     }

//     fetchProducts()
//   }, [])

//   return (
//     <div className={classes.root}>
//       <Grid container justify={'center'}>
//         <div>
//           <Typography variant="h2">Nuestros productos</Typography>
//         </div>
//         <Grid item xs={12} md={12} lg={12} className={classes.productsContainer}>
//           <Grid container>
//             {products?.map((product, key) => (
//               <Grid key={key} item xs={12} md={6} lg={3}>
//                 <Printer
//                   id={product.id}
//                   name={product.name}
//                   price={product.price}
//                   image={product.image}
//                   sku={product.sku}
//                   attributes={product.attributes}
//                 />
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default ProductsSection;