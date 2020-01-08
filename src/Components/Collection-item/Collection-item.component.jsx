import React from "react";
import "./Collection-item.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{ backgroundImage: `URL(${imageUrl})` }}
    ></div>
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">₹{price}</span>
    </div>
  </div>
);

export default CollectionItem;
