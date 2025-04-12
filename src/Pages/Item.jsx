import React from "react";
import { useParams } from "react-router";

const Item = () => {
  let { itemId } = useParams();

  console.log(itemId);

  return (
    <div>
      Item
      <div>Item info</div>
      <div>Item info</div> <div>Item info</div> <div>Item info</div>
    </div>
  );
};

export default Item;
