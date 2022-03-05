import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    let body = document.getElementById("body");
    body.style.backgroundImage =
      "url(https://source.unsplash.com/1600x900/?nature)";
  }, []);

  return <>
  <div className="container" style={{color:'white', fontWeight:'bolder', fontSize:'70px'}}>
    Good Morning, Levi
  </div>
  </>;
}

export default App;
