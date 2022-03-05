import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    let body = document.getElementById("body");
    body.style.backgroundImage =
      "url(https://source.unsplash.com/1600x900/?nature)";
  }, []);

  return <></>;
}

export default App;
