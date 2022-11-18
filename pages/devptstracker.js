import React from "react";
import { useSelector } from "react-redux";
import { devPtsListResult } from "../app/slices/playersdevpts";
import BriefStats from "../partials/briefStats";
import DevPtsTable from "../partials/devPtsTable";
import TrackerForm from "../partials/trackerForm";

function DevPtsTracker() {
  const devPts = useSelector(devPtsListResult);
  return (
    <div className="w-auto">
      <h3 className="text-lg font-bold p-4"> Development Points Tracker</h3>
      <i className="p-3">Beta Project. Only supports dates under 7 days. </i>
      <div className="sm:laptop-arrangement">
        <div className="col-span-2">
          <TrackerForm></TrackerForm>
          <DevPtsTable></DevPtsTable>
        </div>
        <div className="">
          <BriefStats></BriefStats>
        </div>
      </div>
    </div>
  );
}

export default DevPtsTracker;
