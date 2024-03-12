import React from "react";
import Tabs from "./index.jsx";

function RandomTab() {
    return <h1>Some Random Tab</h1>;
}

function CustomTabs() {
    const tabs = [
        {
            label: "Tab 1",
            content: <div>Tab 1 contents</div>,
        },
        {
            label: "Tab 2",
            content: <div>Tab 2 contents</div>,
        },
        {
            label: "Tab 3",
            content: <RandomTab />,
        },
    ];

    function handleOnChange(getCurrentTabIndex) {
        console.log(getCurrentTabIndex);
    }

    return <Tabs tabs={tabs} onchange={handleOnChange} />;
}

export default CustomTabs;
