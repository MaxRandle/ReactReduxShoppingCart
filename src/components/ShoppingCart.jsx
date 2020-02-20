import React, { useContext } from "react";
import { Dialog, DialogTitle, DialogContent, Divider, Typography, Grid } from "@material-ui/core";
import { AppStateContext } from "../contexts/AppStateContext";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";

const ShoppingCart = () => {
  const { appState, setAppState } = useContext(AppStateContext);
  const { cart } = useContext(CartContext);
  const total = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);

  return (
    <Dialog open={appState.cartOpen} onClose={() => setAppState({ ...appState, cartOpen: false })}>
      <DialogTitle>Shopping Cart</DialogTitle>
      <Divider />
      <DialogContent>
        <Grid container direction="column" justify="center" alignItems="stretch" spacing={2}>
          {cart.map(item => (
            <React.Fragment key={item.name}>
              <Grid item>
                <CartItem name={item.name} price={item.price} quantity={item.quantity} />
              </Grid>
              <Divider />
            </React.Fragment>
          ))}
        </Grid>
      </DialogContent>
      <Divider />
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Typography variant="h6">TOTAL:</Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="h6">{`$${(Math.round(total * 100) / 100).toFixed(2)}`}</Typography>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ShoppingCart;
