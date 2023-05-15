import React from "react";
import Item from "./Item";

const List = () => {
  return (
    <div className="List">
      <p>List Here:</p>
      <ul>
        <li>
          <Item />
        </li>
        <li>
          <Item />
        </li>
        <li>
          <Item />
        </li>
      </ul>
    </div>
  );
};

export default List;
