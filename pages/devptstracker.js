import React from "react";
import { useSelector } from "react-redux";
import { devPtsListResult } from "../app/slices/playersdevpts";
import BriefStats from "../partials/briefStats";
import DevPtsTable from "../partials/devPtsTable";
import TrackerForm from "../partials/trackerForm";

function DevPtsTracker() {
  const devPts = useSelector(devPtsListResult);
  return (
    <div>
      <h3 className="text-lg font-bold p-4"> Development Points Tracker</h3>
      <i>Beta Project. Only supports dates under 7 days. </i>
      <div className="sm:laptop-arrangement grid grid-cols-2 gap-4">
        <div className="col-span-2 border-2 border-black rounded-lg p-2">
          <TrackerForm></TrackerForm>
          <hr />
          {/* {devPts.length != 0 ? <DevPtsTable></DevPtsTable> : ""} */}
          <DevPtsTable></DevPtsTable>
        </div>
        <div className="border-2 border-black rounded-lg">
          {/* {devPts.length != 0 ? <BriefStats></BriefStats> : ""} */}
          <BriefStats></BriefStats>
        </div>
      </div>
    </div>
  );
}

export default DevPtsTracker;
