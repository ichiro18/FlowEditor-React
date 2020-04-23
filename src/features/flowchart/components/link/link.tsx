import React, { Component } from "react";
import { ILinkDefaultProps } from "@mrblenny/react-flow-chart/src";
import style from "./link.scss";
import { generateCurvePath, generateSmartPath } from "./utils";

export const Link = ({
  config,
  link,
  startPos,
  endPos,
  fromPort,
  toPort,
  onLinkMouseEnter,
  onLinkMouseLeave,
  onLinkClick,
  isHovered,
  isSelected,
  matrix,
}: ILinkDefaultProps) => {
  const points =
    config.smartRouting && toPort && matrix
      ? generateSmartPath(matrix, startPos, endPos, fromPort, toPort, config)
      : generateCurvePath(startPos, endPos);

  const linkStyle = {
    stroke: "",
  };
  if (fromPort.type === "left") {
    linkStyle.stroke = "#dd1717";
  }
  if (fromPort.type === "right") {
    linkStyle.stroke = "#68ba78";
  }

  return (
    <svg className={style.link}>
      {/* Main line */}
      <path d={points} className={style.link__path} style={linkStyle} />
      {/* Thick line to make selection easier */}
      <path
        d={points}
        stroke="#1976d2"
        strokeWidth="20"
        fill="none"
        strokeLinecap="round"
        strokeOpacity={isHovered || isSelected ? 0.1 : 0}
        onMouseEnter={() => {
          onLinkMouseEnter({ config, linkId: link.id });
        }}
        onMouseLeave={() => {
          onLinkMouseLeave({ config, linkId: link.id });
        }}
        onClick={(e) => {
          onLinkClick({ config, linkId: link.id });
          e.stopPropagation();
        }}
      />
      <marker
        id={link.id}
        markerUnits="userSpaceOnUse"
        orient="auto-start-reverse"
        markerWidth="15"
        markerHeight="15"
        viewBox="0 0 10 10"
        refX="10"
        refY="5"
      >
        <polygon className={style.link__marker} points="0,1.5 0,8.5 10,5 " />
      </marker>
    </svg>
  );
};

export default Link;
