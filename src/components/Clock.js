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
    <div className="font-Poppins text-9xl text-white pt-20">
      {date.toLocaleString("en-GB", {
        hour: "numeric",
        minute: "numeric",
      })}
    </div>
  );
}

export default Clock;
