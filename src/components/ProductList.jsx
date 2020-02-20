import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product";

// This could be a useEffect-hook + API + setState to fetch product list
const products = [
  {
    name: "Sledgehammer",
    price: 125.75
  },
  {
    name: "Axe",
    price: 190.5
  },
  {
    name: "Bandsaw",
    price: 562.13
  },
  {
    name: "Chisel",
    price: 12.9
  },
  {
    name: "Hacksaw",
    price: 18.45
  }
];

const ProductList = () => {
  return (
    <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={3}>
      {products.map(product => (
        <Grid item key={product.name}>
          <Product name={product.name} price={product.price} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
