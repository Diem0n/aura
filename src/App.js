import "./App.css";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    setInterval(
      () => {
        setDate(new Date());
      },
      1000
    );
  //   const onStorage = () => {
  //     setName(localStorage.getItem('username')||"N/A");
  // };
    // window.addEventListener('storage', onStorage);
  }, []);

  const [date, setDate] = useState(new Date());
  // todo show name input only if localstorage does not have the username
  const [name, setName] = useState(localStorage.getItem('username') || "N/A");
  const [nameText, setNameText] = useState("");
  const [isNameSubmitted, setIsNameSubmitted] = useState(localStorage.getItem('username') ? true:false);
  
  const userNameSubmitHandler = e => {
    e.preventDefault();
    // todo 
    // ! juggar for now
    localStorage.setItem('username', nameText);
    setName(localStorage.getItem('username') || "N/A");
    setIsNameSubmitted(true);

  }

  const nameTextChangeHandler = e => {
    e.preventDefault();
    setNameText(e.target.value);
  }

  return (
    <>
      <div className="flex-col justify-center align-middle items-center ">

        {/* {isNameSubmitted && <div style={{ fontWeight: "bolder", fontSize: "70px" }}> */}
        {<div className="text-right text-3xl">Weather placeholder</div>}
        {<div className="text-center text-9xl">
          Good Morning, {name}
        </div>}
        <div className="text-white  text-center font-extrabold text-9xl p-15">
          {date.toLocaleString("en-GB", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          })}
        </div>
        <div className="text-center text-6xl justify-end">
          <form onSubmit={userNameSubmitHandler}>
          {/* {!isNameSubmitted &&  <input type="text" placeholder="What's your name?" className="border-b-8 border-b-white outline-none bg-transparent" onChange={nameTextChangeHandler} />} */}
          {<input type="text" placeholder="What's your name?" className="border-b-8 border-b-white outline-none bg-transparent" onChange={nameTextChangeHandler} />}
          
          </form></div></div>
    </>
  );
}

export default App;
