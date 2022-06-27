import "../css/select-video-tab.css";

const SelectVideoTab = (props: any) => {
  const isLive: boolean = props.tab === "live";
  const isArchive: boolean = props.tab === "archive";

  return (
    <ul className="SelectVideoTab">
      <li
        className={isLive ? "SelectVideoTab-Selected" : ""}
        onClick={() => props.setTab("live")}
      >
        配信中
      </li>
      <li
        className={isArchive ? "SelectVideoTab-Selected" : ""}
        onClick={() => props.setTab("archive")}
      >
        アーカイブ動画
      </li>
    </ul>
  );
};

export default SelectVideoTab;
