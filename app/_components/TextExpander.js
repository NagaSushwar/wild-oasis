"use client";

import { useState } from "react";

export default function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, 50).join(" ") + "...";
  function handleClick() {
    setIsExpanded(!isExpanded);
  }
  return (
    <span>
      {displayText}
      {""}
      <button
        className="text-primary-700 border-b border-primary-7000 leading 3 pb-1"
        onClick={() => handleClick()}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </span>
  );
}
