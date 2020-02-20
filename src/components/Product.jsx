import React from "react";
import { Card, CardHeader, Divider, CardContent, CardActions, Button } from "@material-ui/core";
import { useActions } from "react-redux";
import { addToCartAction } from "../redux/redux";

const Product = props => {
  const { name, price } = props;
  const addToCart = useActions(cartItem => addToCartAction(cartItem));

  return (
    <Card>
      <CardHeader title={name} />
      <Divider />
      <CardContent>{`Price: $${(Math.round(price * 100) / 100).toFixed(2)}`}</CardContent>
      <Divider />
      <CardActions>
        <Button variant="contained" color="primary" onClick={() => addToCart({ name, price })}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
