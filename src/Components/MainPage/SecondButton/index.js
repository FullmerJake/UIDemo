import React from "react";
import "./style.css";

const SecondButton = () => {
  return (
    <>
      {setManeuverButtonVis ? (
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={true}
          className="zIndex"
        >
          <div id="maneuverButtonPositionDiv">
            <div
              className={`
                ${maneuverHome ? "maneuverHome" : ""}
                ${maneuverBottom ? "maneuverBottom" : ""}
                ${maneuverBottomFromHome ? "maneuverBottomFromHome" : ""}
                ${maneuverHomeFromBottom ? "maneuverHomeFromBottom" : ""}
                ${maneuverFromVehicle ? "maneuverFromVehicle" : ""}
              `}
            >
              <button
                id={"maneuverButton"}
                className="floatingButton maneuverButtonStyle"
              >
                <span id="maneuverButtonSpan">Maneuvers</span>
              </button>
            </div>
          </div>
        </Animated>
      ) : (
        ""
      )}
    </>
  );
};

export default SecondButton;
