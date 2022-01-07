import React from "react";
import "./style.css";

const SecondMenu = () => {
  return (
    <>
      {setManeuverVis ? (
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
          {/* <Draggable> */}
          <div id="maneuverModalPositionDiv">
            <div className="modal-box-window">
              <span className="modal-box-title">{ModalName}</span>
              <div className="modal-box-mini-btn" />
              <div className="modal-box-mini-btn" />
              <div className="modal-box-mini-btn" />
              <div className="modal-box-background">
                <div className="manueverOptionSpacing">
                  {" "}
                  <button
                    className="maneuverModalOptions"
                    onClick={onCLickAction}
                    id="maneuverModalOptionOne"
                  >
                    {Option1}
                  </button>
                  <button
                    className="maneuverModalOptions"
                    id="maneuverModalOptionTwo"
                  >
                    {Option2}
                  </button>
                  <button
                    className="maneuverModalOptions"
                    id="maneuverModalOptionThree"
                  >
                    {Option3}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* </Draggable> */}
        </Animated>
      ) : (
        ""
      )}
    </>
  );
};

export default SecondMenu;
