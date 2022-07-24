import React from "react";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";

function DayGoal() {
  const [goal, setGoal] = useState(localStorage.getItem("goal") || "N/A");
  const [goalText, setGoalText] = useState("");
  const [isGoalSubmitted, setIsGoalSubmitted] = useState(
    localStorage.getItem("goal") ? true : false
  );
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
      {!isGoalSubmitted ? (
        <>
          <div>
            <h2 className="text-white text-3xl  m-2">
              What's your goal for today?
            </h2>
            <form onSubmit={goalSubmitHandler}>
              {
                <input
                  type="text"
                  className="font-Poppins p-1 outline-none w-96 bg-transparent border-b-2 border-white text-white text-3xl text-center"
                  onChange={goalTextChangeHandler}
                />
              }
            </form>
          </div>
        </>
      ) : (
        <>
          <div className=" py-3 px-3">
            <h2 className="font-Poppins text-white text-2xl text-center ">
              🎯
            </h2>
            <div className="flex justify-around">
              <ul className="font-Poppins text-white text-3xl text-center m-2">
                {goal.charAt(0).toUpperCase() + goal.substr(1).toLowerCase()}
              </ul>
              <button className="text-white text-lg" onClick={resetGoal}>
                {<EditIcon fontSize="1px" />}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default DayGoal;
