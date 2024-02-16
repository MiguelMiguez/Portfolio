import React, { createContext, useContext } from "react";
import resumeData from "../../json/main.json";


const MyContext = createContext();


const MyContextProvider = ({ children }) => {
  return (
    <MyContext.Provider value={resumeData}>
      {children}
    </MyContext.Provider>
  );
};


const useMyContext = () => {
  return useContext(MyContext);
};

export { MyContextProvider, useMyContext };
