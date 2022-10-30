import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchDevPtsInSpecificLand } from "../app/slices/playersdevpts";

function TrackerForm() {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [landId, setLandId] = useState("");

  const dispatch = useDispatch();

  const handleValueChange = (e) => {
    console.log(e.target.name);
    e.preventDefault();
    if (e.target.name === "landid") {
      setLandId(e.target.value);
    } else if (e.target.name === "datefrom") {
      setDateFrom(e.target.value);
    } else if (e.target.name === "dateto") {
      setDateTo(e.target.value);
    }
  };

  const searchData = (e) => {
    e.preventDefault();
    const inputvalue = {
      dateFrom: dateFrom,
      dateTo: dateTo,
      landId: landId,
    };

    dispatch(fetchDevPtsInSpecificLand(inputvalue));
  };

  return (
    <div>
      <form action="" method="post">
        <div className="grid grid-flow-col auto-cols-auto space-x-2 p-4">
          <div className="grid grid-flow-row auto-rows-auto pb-4">
            <label htmlFor="landid" className="text-lg font-display">
              Land ID:
            </label>
            <select
              className="p-2 text-lg border-2 border-black rounded-lg"
              name="landid"
              id="landid"
              value={landId}
              onChange={handleValueChange}
            >
              <option defaultValue="000000"> Select Land ID</option>
              <option value="145470"> Land Id 145470 </option>
            </select>
          </div>
          <div className="grid grid-flow-row auto-rows-auto pb-4">
            <label htmlFor="datefrom" className="text-lg font-display">
              From
            </label>
            <input
              type="date"
              name="datefrom"
              id="datefrom"
              value={dateFrom}
              onChange={handleValueChange}
              className="text-lg font-normal p-3 border-2 border-black rounded-lg"
            />
          </div>
          <div className="grid grid-flow-row auto-rows-auto pb-4">
            <label htmlFor="dateto" className="text-lg font-display">
              To
            </label>
            <input
              type="date"
              name="dateto"
              id="dateto"
              value={dateTo}
              onChange={handleValueChange}
              className="text-lg font-normal p-3 border-2 border-black rounded-lg"
            />
          </div>
          <div className="grid grid-flow-row auto-rows-auto pb-4">
            <label htmlFor=""></label>
            <button
              className="rounded-lg border-2 text-xl font-display border-blue-800 hover:bg-blue-800 hover:text-white hover:font-display"
              onClick={searchData}
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TrackerForm;
