import { useState } from "react";

export default function Tabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className="">
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          gap: "10px",
        }}
      >
        {tabsContent.map((tabItem, index) => (
          <div
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="" style={{ color: "red" }}>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
