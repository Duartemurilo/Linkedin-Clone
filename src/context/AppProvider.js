import PropTypes from "prop-types";
import React, { useState } from "react";
import AppContext from "./AppContext";

function Provider({ children }) {
  const [urlUser, setUrlUser] = useState(false);
  const state = {
    urlUser,
    setUrlUser,
  };
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
