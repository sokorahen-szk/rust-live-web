import "../css/select-video-tab.css";

const SelectVideoTab = (props: any) => {
  return (
    <ul className="SelectVideoTab">
      <li
        className={props.tab === "live" ? "SelectVideoTab-Selected" : ""}
        onClick={() => props.setTab("live")}
      >
        配信中
      </li>
      <li
        className={props.tab === "archive" ? "SelectVideoTab-Selected" : ""}
        onClick={() => props.setTab("archive")}
      >
        アーカイブ動画
      </li>
    </ul>
  );
};

export default SelectVideoTab;
