import { useEffect } from "react";
import { HeaderContext } from "../App";
import "../css/header.css";
const Header = () => {
  useEffect(() => {}, []);

  return (
    <>
      <HeaderContext.Consumer>
        {(header) => {
          return (
            <header className="Header">
              <div className="Header-Title">{header.title}</div>
            </header>
          );
        }}
      </HeaderContext.Consumer>
    </>
  );
};

export default Header;
