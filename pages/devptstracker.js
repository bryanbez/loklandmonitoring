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
      <div className="sm:laptop-arrangement grid gap-4">
        <div className="sm:laptop-border grid p-3">
          <div>
            <TrackerForm></TrackerForm>
            <hr />
          </div>
          <div>
            {/* {devPts.length != 0 ? <DevPtsTable></DevPtsTable> : ""} */}
            <DevPtsTable></DevPtsTable>
            <hr />
          </div>
        </div>
        <div>
          {/* {devPts.length != 0 ? <BriefStats></BriefStats> : ""} */}
          <BriefStats></BriefStats>
        </div>
      </div>
    </div>
  );
}

export default DevPtsTracker;
