import React from "react";
import { useEffect, useState } from "react";

function Clock() {
  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);
  const [date, setDate] = useState(new Date());
  return (
    <div className="text-9xl text-white font-semibold p-5">
      {date
        .toLocaleString("en-GB", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })
        .replace("am", "AM")
        .replace("pm", "PM")}
    </div>
  );
}

export default Clock;
