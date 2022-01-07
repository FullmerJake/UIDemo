import React from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { Animated } from "react-animated-css";

const FirstMenu = () => {
  return (
    <>
      <div class="nav">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <div class="menu">
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">cursos</a>
          </li>
          <li>
            <a href="#">blog</a>
          </li>
          <li>
            <a href="#">contactos</a>
          </li>
        </div>
      </div>
    </>
  );
};

export default FirstMenu;
