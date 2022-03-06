import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
  },[]);
  
  let date = new Date();
  let hrs = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  let mins = date.getMinutes() < 10 ? `0${date.getMinutes()}`: date.getMinutes();
  let seconds = date.getSeconds();

  return <>
  <div style={{color:'red', fontWeight:'bolder', fontSize:'70px'}}>
    Good Morning, Levi
    <div style={{color:'red'}}>
      {hrs}:{mins}:{seconds}
    </div>
  </div>
  </>;
}

export default App;
