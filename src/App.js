import "./App.css";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import ThermostatAutoIcon from "@mui/icons-material/ThermostatAuto";
import Quote from "./components/Quote";

function App() {
  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  const [date, setDate] = useState(new Date());

  const [name, setName] = useState(localStorage.getItem("username") || "N/A");
  const [nameText, setNameText] = useState("");
  const [isNameSubmitted, setIsNameSubmitted] = useState(
    localStorage.getItem("username") ? true : false
  );

  const [goal, setGoal] = useState(localStorage.getItem("goal") || "N/A");
  const [goalText, setGoalText] = useState("");
  const [isGoalSubmitted, setIsGoalSubmitted] = useState(
    localStorage.getItem("goal") ? true : false
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

  // main goal for today

  const goalTextChangeHandler = (e) => {
    e.preventDefault();
    setGoalText(e.target.value);
  };

  const goalSubmitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("goal", goalText);
    setGoal(localStorage.getItem("goal") || "N/A");
    setIsGoalSubmitted(true);
  };

  const resetGoal = (e) => {
    e.preventDefault();
    localStorage.removeItem("goal");
    setGoal(localStorage.getItem("goal") || "N/A");
    setIsGoalSubmitted(false);
  };

  return (
    <>
      <div className="flex flex-row w-full justify-center  pt-5 ">
        <a href="https://www.youtube.com" className="px-5 m-1">
          <img
            src="youtube_icon.png"
            height={25}
            width={25}
            className="hover:scale-150"
            title="YouTube"
          />
        </a>
        {/*  */}
        <a href="https://web.whatsapp.com" className="px-5 m-1">
          <img
            src="wa.png"
            height={25}
            width={25}
            className="hover:scale-150"
            title="WhatsApp Web"
          />
        </a>

        <a href="https://www.courera.org" className="px-5 m-1">
          <img
            src="csa-2.png"
            height={25}
            width={25}
            className="hover:scale-150"
            title="Coursera"
          />
        </a>

        <a href="https://www.leetcode.com" className="px-5 m-1">
          <img
            src="leetcode-2.png"
            height={25}
            width={25}
            className="hover:scale-150"
            title="LeetCode"
          />
        </a>

        <a href="https://www.mail.google.com" className="px-5 m-1">
          <img
            src="gmail-2.png"
            height={25}
            width={25}
            className="hover:scale-150"
            title="Gmail"
          />
        </a>

        <a href="https://www.github.com" className="px-5 m-1">
          <img
            src="gh.png"
            height={25}
            width={25}
            className="hover:scale-150"
            title="GitHub"
          />
        </a>

        <a href="https://www.stackoverflow.com" className="px-5 m-1">
          <img
            src="so-2.png"
            height={25}
            width={25}
            className="hover:scale-150"
            title="Stack Overflow"
          />
        </a>
      </div>
      {/*  */}

      <div className="p-5 text-shadow-lg">
        <div className="text-right text-white">
          <button>
            <ThermostatAutoIcon fontSize="large" />
          </button>
        </div>
        <div className="flex flex-col h-80vv justify-center items-center">
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

          {!isNameSubmitted ? (
            <>
              <h2 className="text-white text-3xl  m-2">What's your name?</h2>
              <form onSubmit={userNameSubmitHandler}>
                {
                  <input
                    type="text"
                    className="m-2 p-2 outline-none w-80 bg-transparent border-b-2 border-white text-white text-3xl text-center"
                    onChange={nameTextChangeHandler}
                  />
                }
              </form>
            </>
          ) : (
            <>
              <div className="flex">
                <div className="text-5xl text-white font-Poppins p-3">
                  Good{" "}
                  {date.getHours() < 12
                    ? "Morning"
                    : date.getHours() >= 12 && date.getHours() <= 17
                    ? "Afternoon"
                    : "Evening"}
                  , {name}.
                </div>
                <button
                  className="text-white m-2 p-2 text-lg"
                  onClick={resetUserName}
                >
                  {<EditIcon fontSize="1px" />}
                </button>
              </div>
            </>
          )}

          <div className="p-28">
            {!isGoalSubmitted ? (
              <>
                <div className={isNameSubmitted ? "visible" : "invisible"}>
                  <h2 className="text-white text-3xl  m-2">
                    What's your goal for today?
                  </h2>
                  <form onSubmit={goalSubmitHandler}>
                    {
                      <input
                        type="text"
                        className="font-Poppins m-2 p-2 outline-none w-96 bg-transparent border-b-2 border-white text-white text-3xl text-center"
                        onChange={goalTextChangeHandler}
                      />
                    }
                  </form>
                </div>
              </>
            ) : (
              <>
                <h2 className="font-Poppins text-white text-4xl text-center m-2">
                  🎯🚀
                </h2>
                <div className="{isNameSubmitted ? 'visible' : 'invisible'} backdrop-blur-sm py-3 px-3">
                  <div className="flex justify-around">
                    <ul className="font-Poppins text-white text-6xl text-center m-2">
                      {goal.charAt(0).toUpperCase() +
                        goal.substr(1).toLowerCase()}
                    </ul>
                    <button
                      className="text-white m-2 p-2 text-lg"
                      onClick={resetGoal}
                    >
                      {<EditIcon fontSize="1px" />}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {/*  */}
        <Quote />
      </div>
    </>
  );
}

export default App;
