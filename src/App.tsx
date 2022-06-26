import React, { createContext } from "react";
import Header from "./components/Header";
import SelectVideoTab from "./components/SelectVideoTab";

interface IHeader {
  title: string;
}

const header: IHeader = {
  title: "rust-live",
};

export const HeaderContext = createContext(header);

const App = () => {
  return (
    <div className="App">
      <HeaderContext.Provider value={header}>
        <Header />
        <SelectVideoTab />
      </HeaderContext.Provider>
    </div>
  );
};

export default App;
