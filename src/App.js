import "./App.css";
import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';

function App() {
  useEffect(() => {
    setInterval(
      () => {
        setDate(new Date());
      },
      1000
    );
  }, []);

  const [date, setDate] = useState(new Date());
  // todo show name input only if localstorage does not have the username

  const [name, setName] = useState(localStorage.getItem('username') || "N/A");
  const [nameText, setNameText] = useState("");
  const [isNameSubmitted, setIsNameSubmitted] = useState(localStorage.getItem('username') ? true : false);

  const [goal, setGoal] = useState(localStorage.getItem('goal') || "N/A");
  const [goalText, setGoalText] = useState("");
  const [isGoalSubmitted, setIsGoalSubmitted] = useState(localStorage.getItem('goal') ? true : false);

  const userNameSubmitHandler = e => {
    e.preventDefault();
    localStorage.setItem('username', nameText);
    setName(localStorage.getItem('username') || "N/A");
    setIsNameSubmitted(true);
  }

  const nameTextChangeHandler = e => {
    e.preventDefault();
    setNameText(e.target.value);
  }

  // main goal for today

  const goalTextChangeHandler = e => {
    e.preventDefault();
    setGoalText(e.target.value);
  }

  const goalSubmitHandler = e => {
    e.preventDefault();
    localStorage.setItem('goal', goalText);
    setGoal(localStorage.getItem('goal') || "N/A");
    setIsGoalSubmitted(true);
  }

  return (
    <>
      <div className="p-5 text-shadow-lg">
        <div className="text-right text-white">
          <button>
            <ThermostatAutoIcon fontSize='large' />
          </button>
        </div>
        <div className="flex flex-col h-90v justify-center items-center">
          <div className="text-9xl text-white font-semibold p-5">
            {date.toLocaleString("en-GB", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            }).replace("am", "AM").replace("pm", "PM")}
          </div>

          {!isNameSubmitted ?
            <>
              <h2 className="text-white text-2xl  m-2">What's your name?</h2>
              <form onSubmit={userNameSubmitHandler}>
                {<input type="text" className="m-2 outline-none w-80 bg-transparent border-b-2 border-white text-white" onChange={nameTextChangeHandler} />}
              </form>
            </>
            : <div className="text-5xl text-white font-Poppins p-3">
              Good {
                date.getHours() < 12 ?
                  "Morning" :
                  date.getHours() >= 12 && date.getHours() <= 17
                    ? "Afternoon" :
                    "Evening"
              }, {name}.
            </div>
          }

          <div className="p-28">
            {!isGoalSubmitted ?
              <>
                <div className={isNameSubmitted ? 'visible' : 'invisible'}>
                  <h2 className="text-white text-2xl  m-2">What is your goal for today?</h2>
                  <form onSubmit={goalSubmitHandler}>
                    {<input type="text" className="font-Poppins m-2 outline-none w-80 bg-transparent border-b-2 border-white text-white" onChange={goalTextChangeHandler} />}
                  </form>
                </div>
              </> :
              <>
                <div className="{isNameSubmitted ? 'visible' : 'invisible'} backdrop-blur-sm">
                  <h2 className="font-Poppins text-white text-3xl text-center m-2">Your goal for today is</h2>
                  <div className="flex justify-around">
                    <ul className="font-Poppins text-white text-3xl text-center m-2">{goal.charAt(0).toUpperCase() + goal.substr(1).toLowerCase()}</ul>
                    <button className="text-white m-2 p-2 text-lg" onClick={() => setIsGoalSubmitted(false)}>
                      {<EditIcon />}
                    </button>
                  </div>
                </div>
              </>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;