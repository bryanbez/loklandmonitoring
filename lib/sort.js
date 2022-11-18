import mapSort from "mapsort";

function SortData(briefStats, sortBy, sortOrder) {
  return sortOrder === true
    ? sortBy === "name"
      ? briefStats.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
      : briefStats.sort((a, b) => a[sortBy] - b[sortBy])
    : sortBy === "name"
    ? briefStats.sort((a, b) => b[sortBy].localeCompare(a[sortBy]))
    : briefStats.sort((a, b) => b[sortBy] - a[sortBy]);
}

export default SortData;
