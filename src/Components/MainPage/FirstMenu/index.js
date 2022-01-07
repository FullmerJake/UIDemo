import React from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { Animated } from "react-animated-css";

const FirstMenu = () => {
  const dispatch = useDispatch();
  const firstMenuVis = useSelector((state) => state.firstMenuVis);

  const firstMenuOnClick = () => {
    dispatch({
      type: "SECOND-BUTTON-VIS",
    });
  };

  return (
    <>
      {firstMenuVis ? (
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
          <div class="nav">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <div class="menu">
              <li>
                <a href="#" onClick={firstMenuOnClick}>
                  home
                </a>
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
        </Animated>
      ) : (
        ""
      )}{" "}
    </>
  );
};

export default FirstMenu;
