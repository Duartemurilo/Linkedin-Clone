import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Header } from "./style";

function HeaderComponent({ reset }) {
  return (
    <Header>
      <h2>Criar um post</h2>
      <button onClick={(event) => reset(event)} style={{ cursor: "pointer" }}>
        <CloseIcon style={{ color: "#5E5E5E" }} />
      </button>
    </Header>
  );
}

export default HeaderComponent;
