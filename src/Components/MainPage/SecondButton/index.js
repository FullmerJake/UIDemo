import React from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { Animated } from "react-animated-css";

const SecondButton = () => {
  const dispatch = useDispatch();
  const secondButtonVis = useSelector((state) => state.secondButtonVis);

  const secondButtonOnClick = () => {
    dispatch({
      type: "SECOND-MENU-VIS",
    });
  };

  return (
    <>
      {secondButtonVis ? (
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
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
        </Animated>
      ) : (
        ""
      )}{" "}
    </>
  );
};

export default SecondButton;
