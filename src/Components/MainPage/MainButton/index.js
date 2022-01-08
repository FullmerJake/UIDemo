import React from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { Animated } from "react-animated-css";

const MainButton = () => {
  const dispatch = useDispatch();
  //Dynamic Positioning
  const home = useSelector((state) => !state.home);
  const top = useSelector((state) => state.top);
  const right = useSelector((state) => state.right);
  const bottom = useSelector((state) => state.bottom);
  const topFromHome = useSelector((state) => state.topFromHome);
  const rightFromTop = useSelector((state) => state.rightFromTop);
  const bottomFromRight = useSelector((state) => state.bottomFromRight);
  const homeFromBottom = useSelector((state) => state.homeFromBottom);

  const clickDontClick = useSelector((state) => state.clickDontClick);
  const buttonCount = useSelector((state) => state.buttonCount);

  const onClickAction = () => {
    dispatch({ type: "FIRST-MENU-VIS" });
    //Off
    dispatch({ type: "HOME" });

    //On
    dispatch({ type: "TOP" });
    dispatch({ type: "TOP-FROM-HOME" });
    dispatch({ type: "FIRST-MENU-HOME" });
  };

  return (
    <>
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
        <div
          className={`
               ${home ? "home" : ""}
               ${top ? "top" : ""}
               ${right ? "right" : ""}
               ${bottom ? "bottom" : ""}
               ${topFromHome ? "topFromHome" : ""}
               ${rightFromTop ? "rightFromTop" : ""}
               ${bottomFromRight ? "bottomFromRight" : ""}
               ${homeFromBottom ? "homeFromBottom" : ""}
            `}
        >
          <div>
            <button className="glow-on-hover" onClick={onClickAction}>
              <p> {clickDontClick ? "Don't Click Me!" : "Click Me!"} </p>
            </button>
          </div>
        </div>
      </Animated>
    </>
  );
};

export default MainButton;
