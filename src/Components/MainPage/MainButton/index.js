import React from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { Animated } from "react-animated-css";

const MainButton = () => {
  //Dynamic Positioning
  const home = useSelector((state) => state.home);
  const bottom = useSelector((state) => state.bottom);
  const mainMenuOnScreen = useSelector((state) => !state.mainMenuOnScreen);
  const homeFromBottom = useSelector((state) => state.homeFromBottom);
  const bottomFromHome = useSelector((state) => state.bottomFromHome);
  const tempHomeToHome = useSelector((state) => state.tempHomeToHome);

  return (
    <>
      {/* {showTrajPage ? ( */}
      <div className="zIndex">
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
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
                className="glow-on-hover"
                style={{ position: "absolute", top: "40vh", left: "40vw" }}
                // onClick={onClickAction}
              >
                <p> Click Me </p>
              </button>
            </div>
          </div>
        </Animated>
      </div>
      {/* ) : (
        ""
      )}{" "} */}
    </>
  );
};

export default MainButton;
