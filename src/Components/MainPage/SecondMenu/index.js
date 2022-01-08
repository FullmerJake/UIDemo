import React from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { Animated } from "react-animated-css";

const SecondMenu = () => {
  const dispatch = useDispatch();
  const secondMenuVis = useSelector((state) => state.secondMenuVis);

  const secondMenuHome = useSelector((state) => !state.secondMenuHome);

  const secondMenuOnClick = () => {
    dispatch({ type: "FIRST-MENU-VIS" });
    dispatch({ type: "SECOND-MENU-VIS" });
    dispatch({ type: "SECOND-BUTTON-VIS" });

    //Off
    dispatch({ type: "BOTTOM" });
    dispatch({ type: "BOTTOM-FROM-RIGHT" });
    dispatch({ type: "FIRST-MENU-LEFT" });
    dispatch({ type: "FIRST-MENU-LEFT-FROM-TOP" });
    dispatch({ type: "SECOND-BUTTON-RIGHT" });
    dispatch({ type: "SECOND-BUTTON-RIGHT-FROM-HOME" });

    //On
    dispatch({ type: "HOME" });
    dispatch({ type: "HOME-FROM-BOTTOM" });
  };

  return (
    <>
      {secondMenuVis ? (
        <div className={`${secondMenuHome ? "secondMenuHome" : ""}`}>
          <Animated
            animationIn="fadeIn"
            animationOut="fadeOut"
            isVisible={true}
          >
            <div class="container">
              <div class="card">
                <div class="header">
                  <h3>
                    Menu IU <i class="fas fa-angle-down iconM"></i>
                  </h3>
                </div>
                <div class="body">
                  <ul>
                    <li onClick={secondMenuOnClick}>
                      <i class="fas fa-home icon"></i>
                      Home
                    </li>
                    <li>
                      <i class="fas fa-underline icon"></i> Tipography
                    </li>
                    <li>
                      <i class="fas fa-boxes icon"></i> Widgets
                    </li>
                    <li>
                      <i class="fas fa-table icon"></i> Tables
                    </li>
                    <li>
                      <i class="fab fa-wpforms icon"></i> Forms
                      <ul>
                        <li>
                          <i class="fas fa-pencil-alt icon"></i> First form
                        </li>
                        <li>
                          <i class="fas fa-paper-plane icon"></i> Second form
                        </li>
                      </ul>
                    </li>
                    <li>
                      <i class="fas fa-chart-pie icon"></i> Charts
                    </li>
                  </ul>
                </div>
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

export default SecondMenu;
