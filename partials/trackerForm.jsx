import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchDevPtsInSpecificLand } from "../app/slices/playersdevpts";

function TrackerForm() {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [landId, setLandId] = useState("");

  const dispatch = useDispatch();

  const handleValueChange = (e) => {
    e.preventDefault();
    if (e.target.name === "landid") {
      setLandId(e.target.value.replace(/\D/, ""));
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
        <div className="sm:laptop-arrangement-tracker-form grid grid-cols-2 gap-0.5">
          {/* Form group 1 */}
          <div className="sm:md:lg:form-group-in-desktop form-group-in-mobile-with-col-span ">
            <label htmlFor="landid" className="text-lg font-display">
              Land ID:
            </label>
            <input
              type="text"
              pattern="[0-9]*"
              name="landid"
              id="landid"
              value={landId}
              onChange={handleValueChange}
              className="sm:input-in-tablet-and-above input-in-mobile"
            ></input>
          </div>
          {/* Form group 2 */}
          <div className="sm:md:lg:form-group-in-desktop form-group-in-mobile">
            <label htmlFor="datefrom" className="text-lg font-display">
              From
            </label>
            <input
              type="date"
              name="datefrom"
              id="datefrom"
              value={dateFrom}
              onChange={handleValueChange}
              className="sm:input-in-tablet-and-above input-in-mobile"
            />
          </div>
          {/* Form group 3 */}
          <div className="sm:md:lg:form-group-in-desktop form-group-in-mobile">
            <label htmlFor="dateto" className="text-lg font-display">
              To
            </label>
            <input
              type="date"
              name="dateto"
              id="dateto"
              value={dateTo}
              onChange={handleValueChange}
              className="sm:input-in-tablet-and-above input-in-mobile"
            />
          </div>
          {/* Form group 4 */}
          <div className="sm:md:lg:form-group-in-desktop form-group-in-mobile-with-col-span">
            <label htmlFor=""></label>
            <button
              className="rounded-lg border-2 p-2 text-xl font-display border-blue-800 hover:bg-blue-800 hover:text-white hover:font-display"
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
