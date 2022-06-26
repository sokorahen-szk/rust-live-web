import React, { useState } from "react";
import "../css/select-video-tab.css";

const SelectVideoTab = () => {
  const [selectedTab, setSelectedTab] = useState("live");

  return (
    <ul className="SelectVideoTab">
      <li
        className={selectedTab === "live" ? "SelectVideoTab-Selected" : ""}
        onClick={() => setSelectedTab("live")}
      >
        配信中
      </li>
      <li
        className={selectedTab === "archive" ? "SelectVideoTab-Selected" : ""}
        onClick={() => setSelectedTab("archive")}
      >
        アーカイブ動画
      </li>
    </ul>
  );
};

export default SelectVideoTab;
