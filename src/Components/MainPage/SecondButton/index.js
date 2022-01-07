import React from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { Animated } from "react-animated-css";

const SecondButton = () => {
  return (
    <>
      <section id="intro">
        <div id="intro-content" class="center-content">
          <div class="center-content-inner">
            <div class="content-section content-section-margin">
              <div class="content-section-grid clearfix">
                <a href="#" class="button nav-link">
                  <div class="bottom"></div>

                  <div class="top">
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
    </>
  );
};

export default SecondButton;
