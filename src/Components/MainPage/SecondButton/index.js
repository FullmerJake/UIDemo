import React from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { Animated } from "react-animated-css";

const SecondButton = () => {
  const dispatch = useDispatch();
  const secondButtonVis = useSelector((state) => state.secondButtonVis);

  const secondButtonHome = useSelector((state) => state.secondButtonHome);
  const secondButtonRight = useSelector((state) => state.secondButtonRight);
  const secondButtonRightFromHome = useSelector(
    (state) => state.secondButtonRightFromHome
  );

  const secondButtonOnClick = () => {
    dispatch({
      type: "SECOND-MENU-VIS",
    });
    //Off
    dispatch({ type: "RIGHT" });
    dispatch({ type: "RIGHT-FROM-TOP" });
    dispatch({ type: "FIRST-MENU-TOP" });
    dispatch({ type: "FIRST-MENU-TOP-FROM-HOME" });
    dispatch({ type: "SECOND-BUTTON-HOME" });

    //On
    dispatch({ type: "BOTTOM" });
    dispatch({ type: "BOTTOM-FROM-RIGHT" });
    dispatch({ type: "FIRST-MENU-LEFT" });
    dispatch({ type: "FIRST-MENU-LEFT-FROM-TOP" });
    dispatch({ type: "SECOND-BUTTON-RIGHT" });
    dispatch({ type: "SECOND-BUTTON-RIGHT-FROM-HOME" });
  };

  return (
    <>
      {secondButtonVis ? (
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
          <div
            className={`
        ${secondButtonHome ? "secondButtonHome" : ""}
        ${secondButtonRight ? "secondButtonRight" : ""}
        ${secondButtonRightFromHome ? "secondButtonRightFromHome" : ""}`}
          >
            <section id="intro">
              <div id="intro-content" class="center-content">
                <div class="center-content-inner">
                  <div class="content-section content-section-margin">
                    <div class="content-section-grid clearfix">
                      <a href="#" class="button nav-link">
                        <div class="bottom"></div>

                        <div class="top" onClick={secondButtonOnClick}>
                          <div class="label">Go Retro Baby</div>

                          <div class="button-border button-border-left"></div>
                          <div class="button-border button-border-top"></div>
                          <div class="button-border button-border-right"></div>
                          <div class="button-border button-border-bottom"></div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Animated>
      ) : (
        ""
      )}{" "}
    </>
  );
};

export default SecondButton;
