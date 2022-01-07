// ================================Dynamic Positioning Start==========================================
//MainButton
export const home = () => {
  return {
    type: "HOME",
  };
};

export const bottom = () => {
  return {
    type: "BOTTOM",
  };
};

export const mainMenuOnScreen = () => {
  return {
    type: "MAINMENU-ON-SCREEN",
  };
};

export const homeFromBottom = () => {
  return {
    type: "HOME-FROM-BOTTOM",
  };
};

export const bottomFromHome = () => {
  return {
    type: "BOTTOM-FROM-HOME",
  };
};

export const tempHomeToHome = () => {
  return {
    type: "TEMP-HOME-TO-HOME",
  };
};

// SecondButton
export const vehicleHome = () => {
  return {
    type: "VEHICLE-HOME",
  };
};

export const vehicleBottom = () => {
  return {
    type: "VEHICLE-BOTTOM",
  };
};

export const vehicleBottomFromHome = () => {
  return {
    type: "VEHICLE-BOTTOM-FROM-HOME",
  };
};

export const vehicleHomeFromBottom = () => {
  return {
    type: "VEHICLE-HOME-FROM-BOTTOM",
  };
};

export const vehicleFromMainButton = () => {
  return {
    type: "VEHICLE-FROM-MAIN-BUTTON",
  };
};

// FirstMenu
export const launchAimHome = () => {
  return {
    type: "LAUNCH-AIM-HOME",
  };
};

export const launchAimBottom = () => {
  return {
    type: "LAUNCH-AIM-BOTTOM",
  };
};

export const launchAimHomeFromBottom = () => {
  return {
    type: "LAUNCH-AIM-HOME-FROM-BOTTOM",
  };
};

export const launchAimBottomFromHome = () => {
  return {
    type: "LAUNCH-AIM-BOTTOM-FROM-HOME",
  };
};

export const launchAimFromVehicle = () => {
  return {
    type: "LAUNCH-AIM-FROM-VEHICLE",
  };
};

// SecondMenu
export const maneuverHome = () => {
  return {
    type: "MANEUVER-HOME",
  };
};

export const maneuverBottom = () => {
  return {
    type: "MANEUVER-BOTTOM",
  };
};

export const maneuverHomeFromBottom = () => {
  return {
    type: "MANEUVER-HOME-FROM-BOTTOM",
  };
};

export const maneuverBottomFromHome = () => {
  return {
    type: "MANEUVER-BOTTOM-FROM-HOME",
  };
};

export const maneuverFromVehicle = () => {
  return {
    type: "MANEUVER-FROM-VEHICLE",
  };
};

// ===============================================================================

// ======================== Visibility Start ========================================

export const firstMenuVis = () => {
  return { type: "FIRST-MENU-VIS" };
};
export const secondMenuVis = () => {
  return { type: "SECOND-MENU-VIS" };
};
export const mainButtonVis = () => {
  return { type: "MAIN-BUTTON-VIS" };
};
export const secondMenuVis = () => {
  return { type: "SECOND-BUTTON-VIS" };
};

// ======================== Visibility End ==========================================
