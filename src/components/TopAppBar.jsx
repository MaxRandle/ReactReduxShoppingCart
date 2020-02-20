import React, { useContext } from "react";
import { AppBar, Toolbar, IconButton, Tooltip, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { AppStateContext } from "../contexts/AppStateContext";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  }
}));

const TopAppBar = props => {
  const { appState, setAppState } = useContext(AppStateContext);
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          *Store Logo Here*
        </Typography>
        <Tooltip title="View Cart">
          <IconButton onClick={() => setAppState({ ...appState, cartOpen: true })}>
            <ShoppingCartIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
