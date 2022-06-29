import React from "react";
import { NavList } from "./styles";

function NavListComponent(props) {
  return (
    <NavList className={props.text === "Home" && "active"}>
      <a href="/home">
        <img src={props.image} alt="" />
        <span>{props.text}</span>
      </a>
    </NavList>
  );
}

export default NavListComponent;
