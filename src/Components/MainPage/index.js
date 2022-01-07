import React from "react";

//Components
import FirstMenu from "./FirstMenu";
import SecondMenu from "./SecondMenu";
import MainButton from "./MainButton";
import SecondButton from "./SecondButton";

const MainPage = () => {
  return (
    <>
      <MainButton />
      <SecondButton />
      <FirstMenu />
      <SecondMenu />
    </>
  );
};

export default MainPage;
