//Dynamic Positioning
// ==========================================================================
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

// Vehicle Button
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

// LaunchAim Button
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

// Maneuver Button
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