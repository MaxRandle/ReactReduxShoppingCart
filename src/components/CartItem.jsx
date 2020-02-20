import React, { useContext } from "react";
import { Typography, Grid, IconButton, Tooltip } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { CartContext } from "../contexts/CartContext";

const ShoppingCart = props => {
  const { name, price, quantity } = props;
  const { deleteCartItem } = useContext(CartContext);

  return (
    <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
      <Grid item xs={9}>
        <Grid container direction="column" justify="flex-start" alignItems="stretch">
          <Grid item>
            <Typography variant="h5">{name}</Typography>
          </Grid>

          <Grid item>
            <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
              <Grid item xs={6}>
                <Typography variant="subtitle1">Price: </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1">{`$${(Math.round(price * 100) / 100).toFixed(2)}`}</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
              <Grid item xs={6}>
                <Typography variant="subtitle1">Quantity: </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1">{quantity}</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
              <Grid item xs={6}>
                <Typography variant="subtitle1">Subtotal: </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1">{`$${(Math.round(price * quantity * 100) / 100).toFixed(
                  2
                )}`}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid container direction="column" justify="center" alignItems="stretch">
          <Grid item>
            <Tooltip title="Remove Item">
              <IconButton onClick={() => deleteCartItem(name)}>
                <DeleteForeverIcon color="secondary" />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ShoppingCart;
