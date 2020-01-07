import React from "react";
import "./menu-item.styles.scss";

const MenuItem = props => (
  <div className={`menu-item ${props.size} `}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${props.image})` }}
    ></div>
    <div className="content">
      <div className="title">{props.title.toUpperCase()}</div>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
