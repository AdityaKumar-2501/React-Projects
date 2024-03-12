import React, { useState } from "react";
import "./styles.css";
function Tabs({ tabs, onchange }) {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function handleClick(getIndex){
        setCurrentTabIndex(getIndex);
        onchange(getIndex);
    }

    return (
        <div className="wrapper">
            <div className="heading">
                {tabs.map((tab, index) => (
                    <h2 className={`${currentTabIndex === index ? "active" : "inactive"}`} onClick={() => handleClick(index)} key={tab.label}>
                        {tab.label}
                    </h2>
                ))}
            </div>
            <div className="content">
                {tabs[currentTabIndex] && tabs[currentTabIndex].content}
            </div>
        </div>
    );
}

export default Tabs;
