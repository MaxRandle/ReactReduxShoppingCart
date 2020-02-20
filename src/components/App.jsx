import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TopAppBar from "./TopAppBar";
import ShoppingCart from "./ShoppingCart";
import ProductList from "./ProductList";

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(3)
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <>
      <ShoppingCart />
      <TopAppBar />
      <Container maxWidth="sm" className={classes.container}>
        <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={3}>
          <Grid item>
            <Typography variant="h3">Online Store</Typography>
          </Grid>

          <Grid item>
            <ProductList />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
