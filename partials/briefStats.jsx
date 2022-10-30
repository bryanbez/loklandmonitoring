import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { devPtsListResult } from "../app/slices/playersdevpts";
import { createBriefStats } from "../lib/createBriefStats";
import GroupByFieldName from "../lib/groupByFieldName";
import RoundNumbers from "../lib/roundNumbers";
import SortData from "../lib/sort";
import SumAllDevPts from "../lib/sumAllDevPts";

function BriefStats() {
  const result = useSelector(devPtsListResult);
  const [sortedData, setSortedData] = useState([]);
  const [isAsc, setIsAsc] = useState(false);

  const handleSortBy = (sortValue) => {
    setIsAsc(!isAsc);
    setSortedData(
      SortData(
        createBriefStats(result.contribution, "continent"),
        sortValue,
        isAsc
      )
    );
  };

  useEffect(() => {
    if (result.result === true) {
      setIsAsc(!isAsc);
      setSortedData(
        SortData(
          createBriefStats(result.contribution, "continent"),
          "continent",
          isAsc
        )
      );
    } else {
      setSortedData([]);
    }
  }, [result.result]); // runs only on first successful fetch

  return (
    <div className="flex flex-col p-3">
      <div className="text-lg font-semibold p-3">
        <p>Stats of Searched Land</p>
        <small>
          <i>based on the date you searched</i>
        </small>
      </div>
      <hr />
      <div className="text-lg font-semibold p-3">
        <p className="text-lg ">Total Development Points: </p>
        <p className="text-2xl">
          {" "}
          {result.length !== 0 ? SumAllDevPts(result.contribution) : 0}{" "}
        </p>
      </div>
      <hr />
      {result.result === true && (
        <>
          <div className="text-lg font-semibold p-3">
            <p> Top Contributors by Continent </p>
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    <div className="flex flex-row">
                      <p className="px-1">Continent</p>
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
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    <div className="flex flex-row">
                      <p className="px-1">Players Count</p>
                      <button
                        className="rounded-lg"
                        onClick={() => handleSortBy("playersInContinent")}
                      >
                        ⇅
                      </button>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    <div className="flex flex-row">
                      <p className="px-1">Total Dev Pts</p>
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
                {sortedData.map((stats, index) => {
                  return (
                    <tr className="border-b" key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {stats.continent}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {stats.playersInContinent}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {RoundNumbers(stats.total)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
      <hr />
    </div>
  );
}

export default BriefStats;
