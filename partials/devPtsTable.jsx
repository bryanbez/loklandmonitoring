import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  devPtsListResult,
  fetchDevPtsMsg,
  status,
} from "../app/slices/playersdevpts";
import PaginateData from "../lib/paginate";
import RoundNumbers from "../lib/roundNumbers";
import SortData from "../lib/sort";

function DevPtsTable() {
  const result = useSelector(devPtsListResult);
  const message = useSelector(fetchDevPtsMsg);
  const fetchStatus = useSelector(status);
  const lengthOfData = result.contribution?.length || 0;
  const [isAsc, setIsAsc] = useState(false);
  const [sortedData, setSortedData] = useState(result);
  const [paginatedData, setPaginatedData] = useState([]);

  const handleSortBy = (property = "continent") => {
    setIsAsc(!isAsc);
    let processSorting = SortData([...result.contribution], property, isAsc);
    processSorting ? setSortedData(processSorting) : [];
  };

  const getPaginateResult = (result) => {
    return setPaginatedData(result);
  };

  useEffect(() => {
    if (result.length !== 0) {
      handleSortBy(result);
    }
    if (fetchStatus === "loading") {
      setSortedData([]);
    }
  }, [result.contribution, fetchStatus]);

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

      {result.length != 0 ? (
        <PaginateData
          data={sortedData}
          onPassPaginationResult={getPaginateResult}
        />
      ) : null}

      {fetchStatus == "loading" ? <h3>Loading...</h3> : null}

      {result.length !== 0 && (
        <>
          <table className="table-fixed">
            <thead className="border-b">
              <tr>
                <th
                  scope="col"
                  className="sm:laptop-table-content-show mobile-table-content-show"
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
                  className="sm:laptop-table-content-show mobile-table-content-show"
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
                  className="sm:laptop-table-content-show mobile-table-content-show"
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
              {paginatedData !== []
                ? paginatedData?.map((player) => {
                    return (
                      <tr className="border-b" key={player.kingdomId}>
                        <td className="sm:laptop-table-content-show mobile-table-content-show">
                          {player.continent}
                        </td>
                        <td className="sm:laptop-table-content-show mobile-table-content-show">
                          {player.name}
                        </td>
                        <td className="sm:laptop-table-content-show mobile-table-content-show">
                          {RoundNumbers(player.total)}
                        </td>
                      </tr>
                    );
                  })
                : "No Data"}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default DevPtsTable;
