import React from "react";
import ThermostatAutoIcon from "@mui/icons-material/ThermostatAuto";

function weather() {
  return (
    <div className="text-right text-white">
      <button>
        <ThermostatAutoIcon fontSize="large" />
      </button>
    </div>
  );
}

export default weather;
