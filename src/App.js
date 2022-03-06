import "./App.css";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    setInterval(
      () => {
        setDate(new Date());
      },
      1000
    )
  },[]);

  const [date, setDate] = useState(new Date());

  return (
    <>
    
      <div style={{ color: "white", fontWeight: "bolder", fontSize: "70px" }}>
        Good Morning, Levi
        <div style={{ color: "white" }}>
          {date.toLocaleString("en-GB", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          })}
        </div>
        <input type="text" id="fname" name="fname"/>

      </div>
    </>
  );
}

export default App;
