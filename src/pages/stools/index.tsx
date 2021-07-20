// import { createContext, useContext } from "react";
import { StoolsContainer } from "./useStools";
import Tab from "./Tab";
import { Hoge } from "./Hoge";

const Stools = () => {
  // const StoolsContext = createContext("home");
  return (
    <StoolsContainer.Provider>
      <Tab />
      <Hoge />
    </StoolsContainer.Provider>
  );
};

export default Stools;
