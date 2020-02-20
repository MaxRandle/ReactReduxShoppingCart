import React, { useState, createContext } from "react";

export const AppStateContext = createContext();

const AppStateContextProvider = props => {
  const [appState, setAppState] = useState({
    cartOpen: false
  });

  return <AppStateContext.Provider value={{ appState, setAppState }}>{props.children}</AppStateContext.Provider>;
};

export default AppStateContextProvider;
