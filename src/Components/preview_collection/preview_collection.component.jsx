import React from "react";

import "./preview_collection.styles.scss";

const previewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  </div>
);
