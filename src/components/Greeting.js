import React from "react";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";

function Greeting() {
  const [name, setName] = useState(localStorage.getItem("username") || "N/A");
  const [nameText, setNameText] = useState("");
  const [isNameSubmitted, setIsNameSubmitted] = useState(
    localStorage.getItem("username") ? true : false
  );

  const userNameSubmitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("username", nameText);
    setName(localStorage.getItem("username") || "N/A");
    setIsNameSubmitted(true);
  };

  const nameTextChangeHandler = (e) => {
    e.preventDefault();
    setNameText(e.target.value);
  };

  const resetUserName = (e) => {
    e.preventDefault();
    localStorage.removeItem("username");
    setName(localStorage.getItem("username") || "N/A");
    setIsNameSubmitted(false);
  };

  return (
    <>
      {!isNameSubmitted ? (
        <>
          <h2 className="text-white text-3xl">What's your name?</h2>
          <form onSubmit={userNameSubmitHandler}>
            {
              <input
                type="text"
                className="m-2 p-1 outline-none w-80 bg-transparent border-b-2 border-white text-white text-2xl text-center"
                onChange={nameTextChangeHandler}
              />
            }
          </form>
        </>
      ) : (
        <>
          <div className="flex">
            <div className="text-5xl text-white font-Poppins p-2">
              Good{" "}
              {new Date().getHours() < 12
                ? "Morning"
                : new Date().getHours() >= 12 && new Date().getHours() <= 17
                ? "Afternoon"
                : "Evening"}
              , {name}!
              <button
                className="ml-2 text-white text-xs align-top"
                onClick={resetUserName}
              >
                {<EditIcon fontSize="1px" />}
              </button>
            </div>
          </div>
          {/* 
              //* bugfix : see #3
              THIS IS JUST A HACK TO TAKE SOME SCREEN SIZE SO THAT QUOTE GETS PUSHED DOWNWARD
              IS IT RESPONSIVE? I DONT THINK SO
              IS THERE A BETTER WAY TO DO IT? CERTAINLY YES
              BUT
              ILL BE DAMNED IF I HAVE TO SIT ANOTHER COUPLE HOURS SCRATCHING MY HEAD 
              TO FIND A SOLUTION FOR THIS PROBLEM        
          */}
          {/* {<h2 className="text-transparent text-2xl">What's your name?</h2>} */}
        </>
      )}
    </>
  );
}

export default Greeting;
