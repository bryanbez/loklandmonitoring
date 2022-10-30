import GroupByFieldName from "./groupByFieldName";

export const createBriefStats = (contribution = [], property) => {
  let listOfContinents = [];
  let groupedByContinent = GroupByFieldName(contribution, property);

  Object.entries(groupedByContinent).map((players) => {
    listOfContinents.push({
      continent: players[0],
      total: 0,
      playersInContinent: 0,
    });
  });

  contribution.map((players) => {
    listOfContinents.find(function (post, index) {
      if (post.continent == players.continent) {
        post.total += players.total;
        post.playersInContinent++;
      }
    });
  });

  return listOfContinents;
};
