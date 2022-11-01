import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  devPtsListResult,
  fetchDevPtsMsg,
  status,
} from "../app/slices/playersdevpts";
import RoundNumbers from "../lib/roundNumbers";
import SortData from "../lib/sort";

function DevPtsTable() {
  const result = useSelector(devPtsListResult);
  const message = useSelector(fetchDevPtsMsg);
  const fetchStatus = useSelector(status);
  const lengthOfData = result.contribution?.length || 0;
  const [isAsc, setIsAsc] = useState(false);
  const [sortedData, setSortedData] = useState(result);

  const handleSortBy = (property = "continent") => {
    let temp = [...result.contribution];
    setIsAsc(!isAsc);
    setSortedData(SortData(temp, property, isAsc));
  };

  useEffect(() => {
    if (result.result === true) {
      handleSortBy(result);
    }
    if (fetchStatus === "loading") {
      setSortedData([]);
    }
  }, [result.result, fetchStatus]);

  return (
    <div className="flex flex-col p-4">
      {result?.length !== 0 && (
        <h3 className="text-display font-semibold">
          Showing {lengthOfData} records
        </h3>
      )}

      {message && (
        <h3 className="text-display font-semibold">
          Error Fetching Records: {message}
        </h3>
      )}

      {fetchStatus === "loading" && <h3>Loading...</h3>}

      {result.length !== 0 && (
        <table className="table-fixed">
          <thead className="border-b">
            <tr>
              <th
                scope="col"
                className="p-2 text-sm font-medium text-gray-900 text-left w-1/3"
              >
                <div className="flex flex-row">
                  <p className="">Continent</p>
                  <button
                    className="rounded-lg"
                    onClick={() => handleSortBy("continent")}
                  >
                    ⇅
                  </button>
                </div>
              </th>
              <th
                scope="col"
                className="p-2 text-sm font-medium text-gray-900 text-left w-1/3"
              >
                <div className="flex flex-row">
                  <p className="">Player Nickname</p>
                  <button
                    className="rounded-lg"
                    onClick={() => handleSortBy("name")}
                  >
                    ⇅
                  </button>
                </div>
              </th>
              <th
                scope="col"
                className="p-2 text-sm font-medium text-gray-900 text-left w-1/3"
              >
                <div className="flex flex-row">
                  <p className="">Developement Points</p>
                  <button
                    className="rounded-lg"
                    onClick={() => handleSortBy("total")}
                  >
                    ⇅
                  </button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData !== []
              ? sortedData?.map((player) => {
                  return (
                    <tr className="border-b" key={player.kingdomId}>
                      <td className="p-2 whitespace-nowrap text-sm font-medium text-gray-900">
                        {player.continent}
                      </td>
                      <td className="p-2 text-sm text-gray-900 font-light whitespace-nowrap">
                        {player.name}
                      </td>
                      <td className="p-2 text-sm text-gray-900 font-light whitespace-nowrap">
                        {RoundNumbers(player.total)}
                      </td>
                    </tr>
                  );
                })
              : "No Data"}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default DevPtsTable;
