import React from "react";
import "./style.css";

const MainButton = () => {
  return (
    <>
      {showTrajPage ? (
        <div className="zIndex">
          <Animated
            animationIn="fadeIn"
            animationOut="fadeOut"
            isVisible={true}
          >
            <div
              className={`
               ${home ? "home" : ""}
               ${bottom ? "bottom" : ""}
               ${mainMenuOnScreen ? "mainMenuOnScreen" : ""}
               ${bottomFromHome ? "bottomFromHome" : ""}
               ${homeFromBottom ? "homeFromBottom" : ""}
               ${tempHomeToHome ? "tempHomeToHome" : ""}
            `}
            >
              <div>
                <button
                  id={"mainTrajButton"}
                  className={
                    startColorToggle
                      ? "darkBlue floatingButton"
                      : "brightBlue floatingButton"
                  }
                >
                  <div
                    id={startBorderToggle ? "startInnerBorder" : "none"}
                    className="floatingBorder"
                    onClick={onClickAction}
                  >
                    <p id="buttonContent">{startButtonContent}</p>
                  </div>
                </button>
              </div>

              {menuModalToggleVis ? <VehicleSelectModal /> : ""}
            </div>
          </Animated>
        </div>
      ) : (
        ""
      )}{" "}
    </>
  );
};

export default MainButton;
