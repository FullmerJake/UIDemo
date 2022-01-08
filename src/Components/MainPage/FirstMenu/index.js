import React from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { Animated } from "react-animated-css";

// Menu Options
var optionsOne = "home";
var optionsTwo = "about";
var optionsThree = "cursos";
var optionsFour = "blog";
var optionsFive = "contacts";

const FirstMenu = () => {
  const dispatch = useDispatch();
  const firstMenuVis = useSelector((state) => state.firstMenuVis);

  const firstMenuHome = useSelector((state) => state.firstMenuHome);
  const firstMenuLeft = useSelector((state) => state.firstMenuLeft);
  const firstMenuTop = useSelector((state) => state.firstMenuTop);

  const firstMenuTopFromHome = useSelector(
    (state) => state.firstMenuTopFromHome
  );
  const firstMenuLeftFromTop = useSelector(
    (state) => state.firstMenuLeftFromTop
  );

  const firstMenuOnClick = () => {
    dispatch({ type: "SECOND-BUTTON-VIS" });
    // Off
    // dispatch({ type: "HOME" });
    dispatch({ type: "FIRST-MENU-HOME" });
    dispatch({ type: "TOP" });
    dispatch({ type: "TOP-FROM-HOME" });

    // ON
    dispatch({ type: "RIGHT" });
    dispatch({ type: "RIGHT-FROM-TOP" });
    dispatch({ type: "FIRST-MENU-TOP" });
    dispatch({ type: "FIRST-MENU-TOP-FROM-HOME" });
    dispatch({ type: "SECOND-BUTTON-HOME" });
  };

  const mainButtonContentChange = () => {
    dispatch({
      type: "CLICK-DONT-CLICK",
    });
  };

  return (
    <>
      {firstMenuVis ? (
        <div
          className={`${firstMenuHome ? "firstMenuHome" : ""}
        ${firstMenuTop ? "firstMenuTop" : ""}
        ${firstMenuLeft ? "firstMenuLeft" : ""}
        ${firstMenuTopFromHome ? "firstMenuTopFromHome" : ""}
        ${firstMenuLeftFromTop ? "firstMenuLeftFromTop" : ""}`}
        >
          <Animated
            animationIn="fadeIn"
            animationOut="fadeOut"
            isVisible={true}
          >
            <div class="nav">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <div class="menu">
                <li>
                  <a href="#" onClick={firstMenuOnClick}>
                    {optionsOne}
                  </a>
                </li>
                <li>
                  <a href="#" onClick={mainButtonContentChange}>
                    {optionsTwo}
                  </a>
                </li>
                <li>
                  <a href="#">{optionsThree}</a>
                </li>
                <li>
                  <a href="#">{optionsFour}</a>
                </li>
                <li>
                  <a href="#">{optionsFive}</a>
                </li>
              </div>
            </div>
          </Animated>
        </div>
      ) : (
        ""
      )}{" "}
    </>
  );
};

export default FirstMenu;
