import { createContext, useState } from "react";
import Header from "./components/Header";
import SelectVideoTab from "./components/SelectVideoTab";
import SearchBox from "./components/SearchBox";

import "./css/app.css";

interface IHeader {
  title: string;
}

const header: IHeader = {
  title: "rust-live",
};

export const HeaderContext = createContext(header);

const App = () => {
  const [tab, setTab] = useState("live");
  return (
    <div className="App">
      <HeaderContext.Provider value={header}>
        <Header />
        <SelectVideoTab tab={tab} setTab={setTab} />
        <div className="App-Menu">
          <SearchBox />
        </div>
      </HeaderContext.Provider>
    </div>
  );
};

export default App;
