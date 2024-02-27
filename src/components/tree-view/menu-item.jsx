import React, { useState } from "react";
import MenuList from "./menu-list";

function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggle(getChildrenLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getChildrenLabel]: !displayCurrentChildren[getChildrenLabel],
    });
  }

  return (
    <li className="item-container">
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span
            onClick={() => handleToggle(item.label)}
            style={{ cursor: "pointer" }}
          >
            {displayCurrentChildren[item.label] ? "-" : "+"}
          </span>
        ) : null}
      </div>

      {item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}

export default MenuItem;
