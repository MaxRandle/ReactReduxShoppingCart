import React, { useContext } from "react";
import { Card, CardHeader, Divider, CardContent, CardActions, Button } from "@material-ui/core";
import { CartContext } from "../contexts/CartContext";

const Product = props => {
  const { addCartItem } = useContext(CartContext);
  const { name, price } = props;

  return (
    <Card>
      <CardHeader title={name} />
      <Divider />
      <CardContent>{`Price: $${(Math.round(price * 100) / 100).toFixed(2)}`}</CardContent>
      <Divider />
      <CardActions>
        <Button variant="contained" color="primary" onClick={() => addCartItem({ name, price })}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
