import React from "react";
import { Typography, Grid, IconButton, Tooltip } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import { useActions } from "react-redux";
import { deleteFromCartAction } from "../redux/redux";

const ShoppingCart = props => {
  const { name, price, quantity } = props;
  const deleteFromCart = useActions(cartItemName => deleteFromCartAction(cartItemName));

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
              <IconButton onClick={() => deleteFromCart(name)}>
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
