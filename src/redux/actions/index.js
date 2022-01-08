// ================================Dynamic Positioning Start==========================================
// MainButton
export const home = () => {
  return { type: "HOME" };
};
export const top = () => {
  return { type: "TOP" };
};
export const right = () => {
  return { type: "RIGHT" };
};
export const bottom = () => {
  return { type: "BOTTOM" };
};
export const topFromHome = () => {
  return { type: "TOP-FROM-HOME" };
};
export const rightFromTop = () => {
  return { type: "RIGHT-FROM-TOP" };
};
export const bottomFromRight = () => {
  return { type: "BOTTOM-FROM-RIGHT" };
};
export const homeFromBottom = () => {
  return { type: "HOME-FROM-BOTTOM" };
};

// SecondButton
export const secondButtonHome = () => {
  return { type: "SECOND-BUTTON-HOME" };
};
export const secondButtonRight = () => {
  return { type: "SECOND-BUTTON-RIGHT" };
};
export const secondButtonRightFromHome = () => {
  return { type: "SECOND-BUTTON-RIGHT-FROM-HOME" };
};

// FirstMenu
export const firstMenuHome = () => {
  return { type: "FIRST-MENU-HOME" };
};
export const firstMenuLeft = () => {
  return { type: "FIRST-MENU-LEFT" };
};
export const firstMenuTop = () => {
  return { type: "FIRST-MENU-TOP" };
};
export const firstMenuTopFromHome = () => {
  return { type: "FIRST-MENU-TOP-FROM-HOME" };
};
export const firstMenuLeftFromTop = () => {
  return { type: "FIRST-MENU-LEFT-FROM-TOP" };
};

// SecondMenu
export const secondMenuHome = () => {
  return { type: "SECOND_MENU_HOME" };
};

// ================================Dynamic Positioning End===============================================

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

export const clickDontClick = () => {
  return { type: "CLICK-DONT-CLICK" };
};

export const buttonCount = () => {
  return { type: "BUTTON-COUNT" };
};
