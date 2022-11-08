import GroupByFieldName from "./groupByFieldName";

export default function filterBatchFetch(contribution = []) {
  console.log(contribution);
  let combinedPlayerData = [].concat(...contribution);
  let uniquePlayers = [];
  let groupByPlayerId = GroupByFieldName(combinedPlayerData, "kingdomId");

  Object.entries(groupByPlayerId).map((players) => {
    uniquePlayers.push({
      kingdomId: players[0],
      name: "",
      total: 0,
      continent: "",
    });
  });

  combinedPlayerData.map((players) => {
    uniquePlayers.find(function (player, index) {
      if (player.kingdomId == players.kingdomId) {
        player.total += players.total;
        player.name = players.name;
        player.continent = players.continent;
      }
    });
  });

  return { contribution: uniquePlayers };
}
