import "./App.css";
import Quote from "./components/Quote";
import FavSites from "./components/FavSites";
import Clock from "./components/Clock";
import DayGoal from "./components/DayGoal";
import Greeting from "./components/Greeting";
import Weather from "./components/Weather";

function App() {
  return (
    <>
      <div className=" grid grid-cols-4 gap-y-16 p-10 gap-x-6">
        <div className="bg-yellow-600 w-full h-48 ">FAVS</div>
        <div className=" w-full text-center col-span-2 flex flex-col justify-center items-center">
          <Clock />
          <Greeting />
        </div>
        <div className="bg-yellow-600 w-full h-48">WEATHER</div>
        <div className=" bg-yellow-600 w-full"></div>

        <div className=" bg-yellow-600 w-full">Calendar</div>
        <div className=" bg-yellow-600 w-full">Calendar</div>
        <div className=" bg-yellow-600 w-full row-span-2">Calendaasdr</div>
        <div className=" bg-yellow-600 w-full">Calendar</div>
        <div className=" w-full text-center col-span-2 flex flex-col justify-center align-middle items-center">
          <DayGoal />
          <Quote />
        </div>
      </div>
    </>
  );
}

export default App;
