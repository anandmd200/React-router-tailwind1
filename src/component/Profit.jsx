import React, { useContext } from "react";
import { ChannelContext } from "../App";

const Profit = () => {
  const { notificationData } = useContext(ChannelContext);

  console.log("Notifications :  ", notificationData);
  return (
    <div>
      <h1>Profit</h1>
      <div>notifications: {" " + notificationData.notification}</div>
    </div>
  );
};

export default Profit;
